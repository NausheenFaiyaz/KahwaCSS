// observer.js

import { applyStyles } from "./applier.js";

let pendingNodes = new Set();
let rafId = null;

function flush(config) {
  pendingNodes.forEach((node) => {
    applyStyles(node, config);
    
    node.querySelectorAll?.('[class*="kw-"]').forEach((child) => {
      applyStyles(child, config);
    });
  });

  pendingNodes.clear();
  rafId = null;
}

// Main observer
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
        pendingNodes.add(mutation.target);

        if (mutation.target.dataset.kwApplied) {
          delete mutation.target.dataset.kwApplied;
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
