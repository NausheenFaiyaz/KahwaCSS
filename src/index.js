import { scanDOM } from "./applier.js";
import { observeDOM } from "./observer.js";
import { defaultConfig, resolveConfig } from "./parser.js";

export { applyStyles, scanDOM } from "./applier.js";
export { observeDOM } from "./observer.js";
export { defaultConfig, parseClass, resolveConfig } from "./parser.js";

export function initKahwaCSS(userConfig = {}) {
  if (typeof document === "undefined") {
    return null;
  }

  const config = resolveConfig(userConfig);

  const bootstrap = () => {
    scanDOM(document.body, config);
    observeDOM(config);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
    return null;
  }

  bootstrap();
  return config;
}

export default initKahwaCSS;
