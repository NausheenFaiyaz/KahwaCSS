import initKahwaCSS from "./index.js";

if (typeof window !== "undefined") {
  window.KahwaCSS = {
    init: initKahwaCSS,
    initKahwaCSS,
  };
}

export default initKahwaCSS;
