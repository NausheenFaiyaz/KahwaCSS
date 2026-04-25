import { parseClass } from "./parser.js";

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT"]);

export function applyStyles(el, config) {
  if (!el || el.nodeType !== 1) return;
  if (SKIP_TAGS.has(el.tagName)) return;
  if (!el.classList || el.classList.length === 0) return;

  if (el.dataset.kwApplied) return;

  let applied = false;

  el.classList.forEach((cls) => {
    if (!cls.startsWith("kw-")) return;

    const styles = parseClass(cls, config);

    if (styles) {
      Object.assign(el.style, styles);
      applied = true;
    }
  });

  if (applied) {
    el.dataset.kwApplied = "true";
  }
}

export function scanDOM(root = document.body, config) {
  if (!root) return;
  
  const elements = root.querySelectorAll('[class*="kw-"]');

  elements.forEach((el) => applyStyles(el, config));

  applyStyles(root, config);
}
