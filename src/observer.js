import { applyStyles } from "./applier.js";

let pendingNodes = new Set();
let rafId = null;

function flush(config) {
  pendingNodes.forEach((node) => {
    if (!node || node.nodeType !== 1) return;

    applyStyles(node, config);

    if (node.querySelectorAll) {
      node.querySelectorAll('[class*="kw-"]').forEach((child) => {
        applyStyles(child, config);
      });
    }
  });

  pendingNodes.clear();
  rafId = null;
}

export function observeDOM(config) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;
        pendingNodes.add(node);
      });

      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const el = mutation.target;

        pendingNodes.add(el);

        if (el.dataset.kwClasses) {
          delete el.dataset.kwClasses;
        }
      }
    });

    if (!rafId) {
      rafId = requestAnimationFrame(() => flush(config));
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });

  return observer;
}
