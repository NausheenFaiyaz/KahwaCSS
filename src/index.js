import { scanDOM } from "./applier.js";
import { observeDOM } from "./observer.js";

export function initKahwaCSS(userConfig = {}) {
  const config = {
    scale: 4,
    ...userConfig,
  };

  document.addEventListener("DOMContentLoaded", () => {
    // initial scan
    scanDOM(document.body, config);

    // start observer
    observeDOM(config);

    console.log("KahwaCSS ☕ brewed & running!");
  });
}
