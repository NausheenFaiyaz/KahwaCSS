// Static utilities

const staticStyles = {
  // Display
  block: { display: "block" },
  inline: { display: "inline" },
  "inline-block": { display: "inline-block" },
  hidden: { display: "none" },
  "inline-flex": { display: "inline-flex" },
  grid: { display: "grid" },
  "inline-grid": { display: "inline-grid" },

  // Flexbox
  flex: { display: "flex" },
  "flex-col": { flexDirection: "column" },
  "flex-col-reverse": { flexDirection: "column-reverse" },
  "flex-row": { flexDirection: "row" },
  "flex-row-reverse": { flexDirection: "row-reverse" },
  "flex-wrap": { flexWrap: "wrap" },
  "flex-nowrap": { flexWrap: "nowrap" },
  "flex-wrap-reverse": { flexWrap: "wrap-reverse" },

  "items-center": { alignItems: "center" },
  "items-start": { alignItems: "flex-start" },
  "items-end": { alignItems: "flex-end" },
  "items-baseline": { alignItems: "baseline" },
  "items-stretch": { alignItems: "stretch" },

  "justify-start": { justifyContent: "flex-start" },
  "justify-center": { justifyContent: "center" },
  "justify-end": { justifyContent: "flex-end" },
  "justify-between": { justifyContent: "space-between" },
  "justify-around": { justifyContent: "space-around" },
  "justify-evenly": { justifyContent: "space-evenly" },

  // Position
  static: { position: "static" },
  relative: { position: "relative" },
  absolute: { position: "absolute" },
  fixed: { position: "fixed" },
  sticky: { position: "sticky", top: "0" },

  // Text
  "text-center": { textAlign: "center" },
  "text-left": { textAlign: "left" },
  "text-right": { textAlign: "right" },
  bold: { fontWeight: "700" },
  italic: { fontStyle: "italic" },
  underline: { textDecoration: "underline" },
  "line-through": { textDecoration: "line-through" },
  "no-underline": { textDecoration: "none" },
  uppercase: { textTransform: "uppercase" },
  lowercase: { textTransform: "lowercase" },
  capitalize: { textTransform: "capitalize" },

  // OVERFLOW
  "overflow-hidden": { overflow: "hidden" },
  "overflow-auto": { overflow: "auto" },
  "overflow-scroll": { overflow: "scroll" },

  // Border
  border: { border: "1px solid #ccc" },
  rounded: { borderRadius: "6px" },
  "rounded-md": { borderRadius: "10px" },
  "rounded-lg": { borderRadius: "16px" },
  "rounded-full": { borderRadius: "9999px" },

  // Shadow
  shadow: { boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
  "shadow-md": { boxShadow: "0 5px 10px rgba(0,0,0,0.15)" },
  "shadow-lg": { boxShadow: "0 10px 20px rgba(0,0,0,0.2)" },

  // CURSOR
  "cursor-pointer": { cursor: "pointer" },
  "cursor-not-allowed": { cursor: "not-allowed" },
  "cursor-move": { cursor: "move" },
  "cursor-default": { cursor: "default" },

  // LIST
  "list-none": { listStyleType: "none" },
  "list-disc": { listStyleType: "disc" },
  "list-decimal": { listStyleType: "decimal" },

  // TRANSITION
  transition: { transition: "all 0.2s ease-in-out" },
};

const defaultConfig = {
  scale: 4,
  colors: {
    red: "#ed3c3c",
    blue: "#3b82f6",
    green: "#2cd169",
    pink: "#ff5d8f",
    black: "#000",
    white: "#fff",
    orange: "#f37649",
    gray: "#6b7280",
    yellow: "#ffe566",
    purple: "#deaaff",
    cyan: "#67e8f9",
    brown: "#8d4b28",
  },
};

export function parseClass(cls, config = defaultConfig) {
  if (!cls.startsWith("kw-")) return null;
  const raw = cls.replace("kw-", "");

  if (staticStyles[raw]) {
    return staticStyles[raw];
  }

  const parts = raw.split("-");
  const prefix = parts.slice(0, -1).join("-");
  const value = parts[parts.length - 1];
  const num = isNaN(Number(value)) ? value : Number(value);

  if (prefix === "p") return { padding: num * config.scale + "px" };
  if (prefix === "pt") return { paddingTop: num * config.scale + "px" };
  if (prefix === "pb") return { paddingBottom: num * config.scale + "px" };
  if (prefix === "pl") return { paddingLeft: num * config.scale + "px" };
  if (prefix === "pr") return { paddingRight: num * config.scale + "px" };

  if (prefix === "px") {
    return {
      paddingLeft: num * config.scale + "px",
      paddingRight: num * config.scale + "px",
    };
  }

  if (prefix === "py") {
    return {
      paddingTop: num * config.scale + "px",
      paddingBottom: num * config.scale + "px",
    };
  }

  if (prefix === "m" && value === "auto") {
    return { margin: "auto" };
  }

  if (prefix === "m") return { margin: num * config.scale + "px" };
  if (prefix === "mt") return { marginTop: num * config.scale + "px" };
  if (prefix === "mb") return { marginBottom: num * config.scale + "px" };
  if (prefix === "ml") return { marginLeft: num * config.scale + "px" };
  if (prefix === "mr") return { marginRight: num * config.scale + "px" };

  if (prefix === "mx" && value === "auto") {
    return {
      marginLeft: "auto",
      marginRight: "auto",
    };
  }

  if (prefix === "mx") {
    return {
      marginLeft: num * config.scale + "px",
      marginRight: num * config.scale + "px",
    };
  }

  if (prefix === "my") {
    return {
      marginTop: num * config.scale + "px",
      marginBottom: num * config.scale + "px",
    };
  }

  if (prefix === "bg") {
    return { backgroundColor: config.colors[value] || value };
  }

  if (prefix === "text") {
    // alignment
    if (value === "center") return { textAlign: "center" };
    if (value === "left") return { textAlign: "left" };
    if (value === "right") return { textAlign: "right" };

    // font sizes
    const fontSizes = {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
    };

    if (fontSizes[value]) {
      return { fontSize: fontSizes[value] };
    }

    return { color: config.colors[value] || value };
  }

  if (prefix === "fs") return { fontSize: num + "px" };
  if (prefix === "lh") return { lineHeight: num + "px" };

  if (prefix === "fw") return { fontWeight: num };

  const fontWeightMap = {
    thin: "100",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  };

  if (prefix === "font") {
    return { fontWeight: fontWeightMap[value] || value };
  }

  if (prefix === "w" && value === "screen") {
    return { width: "100vw" };
  }

  if (prefix === "w") {
    if (value === "full") return { width: "100%" };
    return { width: num + "%" };
  }

  if (prefix === "h") {
    if (value === "screen") return { height: "100vh" };
    return { height: num + "vh" };
  }

  if (prefix === "min-w") return { minWidth: num + "px" };
  if (prefix === "max-w") return { maxWidth: num + "px" };

  if (prefix === "min-h") return { minHeight: num + "px" };
  if (prefix === "max-h") return { maxHeight: num + "px" };

  if (prefix === "grow") return { flexGrow: num };
  if (prefix === "shrink") return { flexShrink: num };

  if (prefix === "border") {
    return { border: `${num}px solid currentColor` };
  }

  if (prefix === "border-t")
    return { borderTop: `${num}px solid currentColor` };
  if (prefix === "border-b")
    return { borderBottom: `${num}px solid currentColor` };
  if (prefix === "border-l")
    return { borderLeft: `${num}px solid currentColor` };
  if (prefix === "border-r")
    return { borderRight: `${num}px solid currentColor` };

  if (prefix === "border-color") {
    return { borderColor: config.colors[value] || value };
  }

  if (prefix === "grid-cols") {
    return {
      gridTemplateColumns: `repeat(${num}, minmax(0, 1fr))`,
    };
  }

  if (prefix === "grid-rows") {
    return {
      gridTemplateRows: `repeat(${num}, minmax(0, 1fr))`,
    };
  }

  if (prefix === "gap") {
    return { gap: num * config.scale + "px" };
  }

  if (prefix === "gap-x") return { columnGap: num * config.scale + "px" };
  if (prefix === "gap-y") return { rowGap: num * config.scale + "px" };

  if (prefix === "overflow") {
    return { overflow: value };
  }
  if (prefix === "overflow-x") return { overflowX: value };
  if (prefix === "overflow-y") return { overflowY: value };

  if (prefix === "opacity") {
    return { opacity: num / 100 };
  }

  if (prefix === "duration") {
    return { transitionDuration: num + "ms" };
  }

  if (prefix === "top") return { top: num * config.scale + "px" };
  if (prefix === "left") return { left: num * config.scale + "px" };
  if (prefix === "right") return { right: num * config.scale + "px" };
  if (prefix === "bottom") return { bottom: num * config.scale + "px" };

  if (prefix === "z") return { zIndex: num };

  if (prefix === "aspect") {
    return { aspectRatio: value };
  }

  if (prefix === "object") {
    return { objectFit: value };
  }

  if (prefix === "pointer") {
    return { pointerEvents: value };
  }

  return null;
}
