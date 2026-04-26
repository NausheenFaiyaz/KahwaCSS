import { applyStyles } from "./applier.js";
import { getUtilitySelector } from "./parser.js";

let pendingNodes = new Set();
let rafId = null;

function flush(config) {
  const selector = getUtilitySelector(config);

  pendingNodes.forEach((node) => {
    if (!node || node.nodeType !== 1) return;

    applyStyles(node, config);

    if (node.querySelectorAll && selector) {
      node.querySelectorAll(selector).forEach((child) => {
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

        if (el.dataset.kahwaClasses) {
          delete el.dataset.kahwaClasses;
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
