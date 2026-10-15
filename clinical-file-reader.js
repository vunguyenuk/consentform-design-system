/* Conservative local extraction: never substitutes fictional rows for an uploaded file. */
(function (root) {
  'use strict';
  const mimeTypes = {
    pdf: 'application/pdf',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    tif: 'image/tiff',
    tiff: 'image/tiff',
  };
  function fileType(file) {
    return mimeTypes[file.name.split('.').at(-1).toLowerCase()] || '';
  }
  function validateFile(file) {
    if (!file || !fileType(file))
      throw new Error('Choose a PDF, TIFF, PNG or JPEG.');
    if (file.size > 25 * 1024 * 1024)
      throw new Error('Keep the file under 25 MB.');
    if (!file.size) throw new Error('This file is empty.');
  }
  const aliases = {
    name: /^(resident|patient)( name)?$|^name$/i,
    dob: /^(date of birth|dob|birth date)$/i,
    roomBed: /^(room([ /-]+bed)?|room no\.?|bed)$/i,
    residentStatus: /^resident status$|^status$/i,
    careLevel: /^care level$/i,
    altCareLevel: /^alt\.? care level$/i,
    primaryPayer: /^(primary payer|payer|insurance)$/i,
    roomRate: /^room rate$/i,
    bedStatus: /^bed status$/i,
  };
  function parseCensusPages(pages) {
    const rows = [];
    let printedTotal = null,
      section = '',
      header = null;
    for (const page of pages) {
      for (const line of page.lines) {
        const text = line.cells
          .map((c) => c.text)
          .join(' ')
          .trim();
        const total = text.match(
          /(?:total\s+(?:residents?|patients?)|(?:resident|patient)\s+total)\s*[:=]?\s*(\d+)\b/i,
        );
        if (total) {
          printedTotal = +total[1];
          continue;
        }
        const columns = line.cells
          .map((c) => {
            const key = Object.keys(aliases).find((k) =>
              aliases[k].test(c.text.trim()),
            );
            return key ? { key, x: c.x } : null;
          })
          .filter(Boolean);
        if (
          columns.some((c) => c.key === 'name') &&
          columns.some((c) => c.key === 'dob')
        ) {
          header = columns.sort((a, b) => a.x - b.x);
          continue;
        }
        if (/^(unit|floor|section)\s*[:]/i.test(text)) {
          section = text;
          continue;
        }
        const values = {};
        if (header) {
          for (const cell of line.cells) {
            const col = header.findLast(
              (c, i) =>
                cell.x >= c.x - 8 &&
                (i === header.length - 1 || cell.x < header[i + 1].x - 8),
            );
            if (col)
              values[col.key] = [values[col.key], cell.text]
                .filter(Boolean)
                .join(' ');
          }
          if (!values.name) continue;
        } else {
          const m = text.match(
            /^(.*?)\s+(\d{1,2}[/.-]\d{1,2}[/.-]\d{4}|\d{4}-\d{2}-\d{2})\s+(.+)$/,
          );
          if (!m) continue;
          values.name = m[1].trim();
          values.dob = m[2];
          values.roomBed = m[3].split(/\s{2,}/)[0];
        }
        if (!values.dob && !/vacant|empty|inactive/i.test(text)) continue;
        rows.push({
          fields: values,
          page: page.page,
          section,
          uncertain: Object.keys(values).filter((k) => values[k]),
        });
      }
    }
    return {
      rows,
      printedTotal,
      text: pages
        .map(
          (p) =>
            'Page ' +
            p.page +
            '\n' +
            p.lines
              .map((l) => l.cells.map((c) => c.text).join(' | '))
              .join('\n'),
        )
        .join('\n\n'),
      reader: 'local_pdf_text',
      pageCount: Math.max(1, ...pages.map((p) => p.page)),
      error: rows.length
        ? 'Check each row against the original. Local text reading can miss rows or columns.'
        : 'No reliable resident rows were found. Open the source and enter the rows manually.',
    };
  }
  function parseFaceText(text) {
    const fields = {};
    const patterns = {
      first: /(?:first|given)\s+name\s*[:|]\s*([^\n|]+)/i,
      last: /(?:last|family|sur)\s*name\s*[:|]\s*([^\n|]+)/i,
      dob: /(?:date of birth|dob|birth date)\s*[:|]\s*([\d/.-]+)/i,
      sex: /(?:gender|sex)\s*[:|]\s*(Male|Female|Other)\b/i,
      room: /(?:room(?:\s*[/\-]\s*bed)?)\s*[:|]\s*([^\n|]+)/i,
      payer: /(?:primary payer|insurance|payer)\s*[:|]\s*([^\n|]+)/i,
      member:
        /(?:member\s*(?:id|number)|policy\s*(?:id|number))\s*[:|]\s*([^\n|]+)/i,
    };
    for (const [k, re] of Object.entries(patterns)) {
      const m = text.match(re);
      if (m) fields[k] = m[1].trim();
    }
    if (fields.dob)
      fields.dob = root.ClinicalWorkflows.parseDate(fields.dob) || fields.dob;
    return fields;
  }
  async function readFile(blob, kind, onProgress = () => {}) {
    if (blob.type !== 'application/pdf')
      return {
        rows: [],
        fields: {},
        text: '',
        reader: 'manual',
        error:
          'This file is a scan or image. Automatic OCR is not connected. Read the original and enter its values manually.',
      };
    const pdfjs = await import('./assets/pdfjs/legacy/build/pdf.mjs');
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'assets/pdfjs/legacy/build/pdf.worker.mjs',
      document.baseURI,
    ).href;
    const task = pdfjs.getDocument({
      data: new Uint8Array(await blob.arrayBuffer()),
      isEvalSupported: false,
      cMapUrl: new URL('assets/pdfjs/cmaps/', document.baseURI).href,
      cMapPacked: true,
      standardFontDataUrl: new URL(
        'assets/pdfjs/standard_fonts/',
        document.baseURI,
      ).href,
      wasmUrl: new URL('assets/pdfjs/wasm/', document.baseURI).href,
    });
    let pdf;
    try {
      pdf = await task.promise;
      if (pdf.numPages > 100)
        throw new Error(
          'This file has over 100 pages. Use a smaller file or enter values manually.',
        );
      const pages = [];
      for (let p = 1; p <= pdf.numPages; p++) {
        const page = await pdf.getPage(p),
          content = await page.getTextContent(),
          lines = [];
        for (const item of content.items
          .filter((i) => i.str?.trim())
          .sort(
            (a, b) =>
              b.transform[5] - a.transform[5] ||
              a.transform[4] - b.transform[4],
          )) {
          let line = lines.find((l) => Math.abs(l.y - item.transform[5]) < 3);
          if (!line) {
            line = { y: item.transform[5], cells: [] };
            lines.push(line);
          }
          const prior = line.cells.at(-1),
            x = item.transform[4];
          if (prior && x - prior.end < 10) {
            prior.text += ' ' + item.str;
            prior.end = x + item.width;
          } else line.cells.push({ text: item.str, x, end: x + item.width });
        }
        pages.push({ page: p, lines });
        onProgress(p, pdf.numPages);
        page.cleanup();
      }
      const text = pages
        .map((p) =>
          p.lines.map((l) => l.cells.map((c) => c.text).join(' | ')).join('\n'),
        )
        .join('\n\n');
      if (kind === 'census') return parseCensusPages(pages);
      return {
        fields: parseFaceText(text),
        text,
        reader: 'local_pdf_text',
        error: Object.keys(parseFaceText(text)).length
          ? 'Check and confirm every value against the face sheet.'
          : 'No reliable labelled patient fields were found. Enter values from the original document.',
      };
    } catch (error) {
      return {
        rows: [],
        fields: {},
        text: '',
        reader: 'manual',
        error:
          error.message ||
          'The file could not be read. Enter values manually from the original.',
      };
    } finally {
      await task.destroy();
    }
  }
  root.ClinicalFileReader = {
    fileType,
    validateFile,
    parseCensusPages,
    parseFaceText,
    readFile,
  };
  if (typeof module !== 'undefined') module.exports = root.ClinicalFileReader;
})(typeof globalThis !== 'undefined' ? globalThis : this);
