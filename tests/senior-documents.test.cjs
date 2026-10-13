const test=require('node:test');
const assert=require('node:assert/strict');
const {seniorDocumentTextLines}=require('../senior-documents.js');
test('PDF reflow retains text and source order across same-line fragments',()=>{
 const items=[{str:'Resident:',transform:[1,0,0,1,0,700],height:12},{str:'Eleanor Bennett',transform:[1,0,0,1,60,700],height:12,hasEOL:true},{str:'Room 104',transform:[1,0,0,1,0,670],height:12,hasEOL:true}];
 assert.deepEqual(seniorDocumentTextLines(items),['Resident: Eleanor Bennett','Room 104']);
});
test('PDF text without explicit line ends still separates different baselines',()=>{
 assert.deepEqual(seniorDocumentTextLines([{str:'First line',transform:[1,0,0,1,0,700]},{str:'Second line',transform:[1,0,0,1,0,660]}]),['First line','Second line']);
});
test('Scanned pages and marked content do not produce fabricated text',()=>{
 assert.deepEqual(seniorDocumentTextLines([{type:'beginMarkedContent'},{str:'  '},{type:'endMarkedContent'}]),[]);
});
test('PDF strings preserve punctuation, Unicode and HTML-shaped text for safe textContent rendering',()=>{
 assert.deepEqual(seniorDocumentTextLines([{str:'Nguyễn & Smith <img src=x> — do not discard',hasEOL:true}]),['Nguyễn & Smith <img src=x> — do not discard']);
});
