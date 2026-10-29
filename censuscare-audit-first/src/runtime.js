/* Minimal runtime for the CensusCare prototype.
 * Renders the {{hole}} template with <template data-sc="if|for"> blocks,
 * wires on* handlers, and patches the DOM on setState so focus, scroll and animations stay intact. */
(function () {
  'use strict';
  var root = document.getElementById('app');
  var tpl = document.getElementById('tpl').content;
  var HOLE = /\{\{([\s\S]+?)\}\}/g;
  var cache = {};

  function evalExpr(expr, scope) {
    var fn = cache[expr];
    if (!fn) {
      /* eslint-disable no-new-func */
      fn = cache[expr] = new Function('$s', 'with ($s) { return (' + expr + '); }');
    }
    try { return fn(scope); } catch (e) { return undefined; }
  }

  function interp(str, scope) {
    var m = str.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
    if (m) return evalExpr(m[1], scope);
    return str.replace(HOLE, function (_, ex) {
      var v = evalExpr(ex, scope);
      return v == null || v === false ? '' : String(v);
    });
  }

  function textOf(str, scope) {
    if (str.indexOf('{{') < 0) return str;
    return str.replace(HOLE, function (_, ex) {
      var v = evalExpr(ex, scope);
      return v == null || v === false ? '' : String(v);
    });
  }

  function eventName(el, attr) {
    var n = attr.slice(2);
    if (n === 'change') {
      var tag = el.tagName;
      var type = (el.getAttribute('type') || '').toLowerCase();
      if (tag === 'TEXTAREA' || (tag === 'INPUT' && type !== 'checkbox' && type !== 'radio')) return 'input';
    }
    return n;
  }

  var PROPS = { value: 1, checked: 1, disabled: 1, defaultchecked: 1, selected: 1 };

  function renderNodes(nodes, scope, parent) {
    for (var i = 0; i < nodes.length; i++) renderNode(nodes[i], scope, parent);
  }

  function renderNode(node, scope, parent) {
    if (node.nodeType === 3) {
      parent.appendChild(document.createTextNode(textOf(node.nodeValue, scope)));
      return;
    }
    if (node.nodeType !== 1) return;
    if (node.tagName === 'TEMPLATE' && node.dataset.sc) {
      var kind = node.dataset.sc;
      if (kind === 'if') {
        if (interp(node.dataset.value, scope)) renderNodes(node.content.childNodes, scope, parent);
      } else if (kind === 'for') {
        var list = interp(node.dataset.list, scope) || [];
        var as = node.dataset.as || 'item';
        for (var k = 0; k < list.length; k++) {
          var sub = Object.create(scope);
          sub[as] = list[k];
          renderNodes(node.content.childNodes, sub, parent);
        }
      }
      return;
    }
    var el = node.namespaceURI === 'http://www.w3.org/2000/svg'
      ? document.createElementNS(node.namespaceURI, node.localName)
      : document.createElement(node.localName);
    var props = [];
    var unc = false;
    for (var a = 0; a < node.attributes.length; a++) {
      var at = node.attributes[a];
      var name = at.name;
      if (name.indexOf('hint-') === 0) continue;
      if (name.indexOf('on') === 0 && name.length > 2) {
        var h = interp(at.value, scope);
        if (typeof h === 'function') { var ev = eventName(node, name); if (ev === 'focus') ev = 'focusin'; if (ev === 'blur') ev = 'focusout'; (el.__h || (el.__h = {}))[ev] = h; }
        continue;
      }
      if (PROPS[name] && at.value.indexOf('{{') >= 0) { props.push([name, interp(at.value, scope)]); continue; }
      if (name === 'defaultchecked') { props.push(['checked', true]); unc = true; continue; }
      if (name === 'defaultvalue') { props.push(['value', at.value.indexOf('{{') >= 0 ? interp(at.value, scope) : at.value]); unc = true; continue; }
      var v = at.value.indexOf('{{') >= 0 ? interp(at.value, scope) : at.value;
      if (v === false || v == null) continue;
      el.setAttribute(name, v === true ? '' : String(v));
    }
    renderNodes(node.childNodes, scope, el);
    el.__p = {};
    for (var p = 0; p < props.length; p++) {
      var pn = props[p][0] === 'defaultchecked' ? 'checked' : props[p][0];
      var pv = props[p][1];
      el.__p[pn] = pv;
      if (pn === 'value') el.value = pv == null ? '' : pv;
      else el[pn] = !!pv;
    }
    var isField = el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT';
    if (isField && (unc || !node.hasAttribute('value')) && !node.hasAttribute('checked')) el.setAttribute('data-unc', '');
    parent.appendChild(el);
  }

  /* ---- DOM patching: keep nodes stable so focus, scroll and CSS enter-animations behave ---- */
  function same(o, n) {
    if (o.nodeType !== n.nodeType) return false;
    if (o.nodeType !== 1) return true;
    return o.tagName === n.tagName && o.namespaceURI === n.namespaceURI &&
      o.getAttribute('data-key') === n.getAttribute('data-key') &&
      (o.tagName !== 'INPUT' || o.type === n.type);
  }
  function patchEl(o, n) {
    var i, at;
    for (i = o.attributes.length - 1; i >= 0; i--) {
      at = o.attributes[i];
      if (!n.hasAttribute(at.name)) o.removeAttribute(at.name);
    }
    for (i = 0; i < n.attributes.length; i++) {
      at = n.attributes[i];
      if (o.getAttribute(at.name) !== at.value) o.setAttribute(at.name, at.value);
    }
    o.__h = n.__h;
    var pr = n.__p || {};
    Object.keys(pr).forEach(function (k) {
      var v = pr[k];
      if (k === 'value') {
        if (o.hasAttribute('data-unc')) return;
        var sv = v == null ? '' : String(v);
        if (o.value !== sv) o.value = sv;
      } else if (o[k] !== !!v) {
        if (!(k === 'checked' && o.hasAttribute('data-unc'))) o[k] = !!v;
      }
    });
    morph(o, n);
  }
  function morph(a, b) {
    var nb = Array.prototype.slice.call(b.childNodes);
    for (var i = 0; i < nb.length; i++) {
      var n = nb[i], o = a.childNodes[i];
      if (!o) { a.appendChild(n); continue; }
      if (!same(o, n)) { a.replaceChild(n, o); continue; }
      if (o.nodeType === 1) patchEl(o, n);
      else if (o.nodeValue !== n.nodeValue) o.nodeValue = n.nodeValue;
    }
    while (a.childNodes.length > nb.length) a.removeChild(a.lastChild);
  }

  /* one delegated listener per event type; handlers live on el.__h */
  ['click', 'input', 'change', 'keydown', 'keyup', 'submit', 'focusin', 'focusout', 'dragover', 'drop'].forEach(function (type) {
    root.addEventListener(type, function (e) {
      var el = e.target;
      while (el && el !== root.parentNode) {
        var h = el.__h && el.__h[type];
        if (h) { h.call(el, e); if (e.cancelBubble) break; }
        el = el.parentNode;
      }
    });
  });

  var comp, queued = false;
  function render() {
    queued = false;
    var vals = comp.renderVals();
    var frag = document.createElement('div');
    renderNodes(tpl.childNodes, vals, frag);
    morph(root, frag);
  }

  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (patch) {
    var p = typeof patch === 'function' ? patch(this.state) : patch;
    this.state = Object.assign({}, this.state, p);
    if (!queued) { queued = true; Promise.resolve().then(render); }
  };

  var src = document.getElementById('logic').textContent;
  var Component = new Function('DCLogic', src + '\nreturn Component;')(DCLogic);
  comp = new Component({});
  render();
  window.__app = comp;
})();
