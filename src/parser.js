// Static utilities

const staticStyles = {
  // Display
  block: { display: "block" },
  inline: { display: "inline" },
  "inline-block": { display: "inline-block" },
  hidden: { display: "none" },
  flex: { display: "flex" },
  "inline-flex": { display: "inline-flex" },
  grid: { display: "grid" },
  "inline-grid": { display: "inline-grid" },
  table: { display: "table" },
  "inline-table": { display: "inline-table" },
  "table-row": { display: "table-row" },
  "table-cell": { display: "table-cell" },
  contents: { display: "contents" },

  // Visibility
  visible: { visibility: "visible" },
  invisible: { visibility: "hidden" },

  // Flexbox
  "flex-col": { flexDirection: "column" },
  "flex-col-reverse": { flexDirection: "column-reverse" },
  "flex-row": { flexDirection: "row" },
  "flex-row-reverse": { flexDirection: "row-reverse" },
  "flex-wrap": { flexWrap: "wrap" },
  "flex-nowrap": { flexWrap: "nowrap" },
  "flex-wrap-reverse": { flexWrap: "wrap-reverse" },
  "flex-1": { flex: "1 1 0%" },
  "flex-auto": { flex: "1 1 auto" },
  "flex-initial": { flex: "0 1 auto" },
  "flex-none": { flex: "none" },

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
  sticky: { position: "sticky" },

  // Text
  "text-center": { textAlign: "center" },
  "text-left": { textAlign: "left" },
  "text-right": { textAlign: "right" },
  "text-justify": { textAlign: "justify" },
  bold: { fontWeight: "700" },
  italic: { fontStyle: "italic" },
  underline: { textDecoration: "underline" },
  "line-through": { textDecoration: "line-through" },
  "no-underline": { textDecoration: "none" },
  uppercase: { textTransform: "uppercase" },
  lowercase: { textTransform: "lowercase" },
  capitalize: { textTransform: "capitalize" },
  "normal-case": { textTransform: "none" },

  // Overflow
  "overflow-hidden": { overflow: "hidden" },
  "overflow-auto": { overflow: "auto" },
  "overflow-scroll": { overflow: "scroll" },
  "overflow-visible": { overflow: "visible" },

  // Border and radius
  border: { border: "1px solid currentColor" },
  "border-0": { borderWidth: "0" },
  rounded: { borderRadius: "6px" },
  "rounded-none": { borderRadius: "0" },
  "rounded-sm": { borderRadius: "2px" },
  "rounded-md": { borderRadius: "10px" },
  "rounded-lg": { borderRadius: "16px" },
  "rounded-xl": { borderRadius: "20px" },
  "rounded-2xl": { borderRadius: "24px" },
  "rounded-full": { borderRadius: "9999px" },

  // Shadow
  "shadow-none": { boxShadow: "none" },
  shadow: { boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
  "shadow-sm": { boxShadow: "0 1px 2px rgba(0,0,0,0.08)" },
  "shadow-md": { boxShadow: "0 5px 10px rgba(0,0,0,0.15)" },
  "shadow-lg": { boxShadow: "0 10px 20px rgba(0,0,0,0.2)" },
  "shadow-xl": { boxShadow: "0 16px 32px rgba(0,0,0,0.24)" },

  // Cursor
  "cursor-pointer": { cursor: "pointer" },
  "cursor-not-allowed": { cursor: "not-allowed" },
  "cursor-move": { cursor: "move" },
  "cursor-default": { cursor: "default" },
  "cursor-text": { cursor: "text" },

  // List
  "list-none": { listStyleType: "none" },
  "list-disc": { listStyleType: "disc" },
  "list-decimal": { listStyleType: "decimal" },

  // Whitespace
  "whitespace-normal": { whiteSpace: "normal" },
  "whitespace-nowrap": { whiteSpace: "nowrap" },
  "whitespace-pre": { whiteSpace: "pre" },
  "whitespace-pre-wrap": { whiteSpace: "pre-wrap" },

  // Object fit
  "object-contain": { objectFit: "contain" },
  "object-cover": { objectFit: "cover" },
  "object-fill": { objectFit: "fill" },
  "object-none": { objectFit: "none" },
  "object-scale-down": { objectFit: "scale-down" },

  // Pointer events
  "pointer-none": { pointerEvents: "none" },
  "pointer-auto": { pointerEvents: "auto" },

  // Transition
  transition: { transition: "all 0.2s ease-in-out" },
  "transition-colors": { transitionProperty: "color, background-color, border-color" },
  "transition-opacity": { transitionProperty: "opacity" },
  "transition-transform": { transitionProperty: "transform" },
};

const textSizeMap = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "30px",
  "4xl": "36px",
  "5xl": "48px",
  "6xl": "60px",
};

const fontWeightMap = {
  thin: "100",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

const roundedMap = {
  none: "0",
  sm: "2px",
  md: "10px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  full: "9999px",
};

const aspectRatioMap = {
  auto: "auto",
  square: "1 / 1",
  video: "16 / 9",
};

export const defaultConfig = {
  prefixes: ["kw"],
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
    slate: "#64748b",
    zinc: "#71717a",
  },
};

export function resolveConfig(userConfig = {}) {
  const merged = {
    ...defaultConfig,
    ...userConfig,
    colors: {
      ...defaultConfig.colors,
      ...(userConfig.colors || {}),
    },
  };

  // KahwaCSS intentionally supports only the `kw-` prefix.
  merged.prefixes = ["kw"];

  if (!Number.isFinite(merged.scale)) {
    merged.scale = defaultConfig.scale;
  }

  return merged;
}

function stripUtilityPrefix(cls, prefixes) {
  if (typeof cls !== "string") return null;

  for (const prefix of prefixes) {
    const fullPrefix = `${prefix}-`;
    if (cls.startsWith(fullPrefix)) {
      return cls.slice(fullPrefix.length);
    }
  }

  return null;
}

export function isUtilityClass(cls, config = defaultConfig) {
  if (typeof cls !== "string" || cls.length === 0) return false;
  const { prefixes } = resolveConfig(config);
  return stripUtilityPrefix(cls, prefixes) !== null;
}

export function getUtilitySelector(config = defaultConfig) {
  const { prefixes } = resolveConfig(config);
  return prefixes.map((prefix) => `[class*="${prefix}-"]`).join(", ");
}

function isArbitraryToken(token) {
  return token.startsWith("[") && token.endsWith("]") && token.length > 2;
}

function extractArbitraryValue(token) {
  if (!isArbitraryToken(token)) return null;
  return token.slice(1, -1);
}

function toNumber(token) {
  const parsed = Number(token);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseFraction(token) {
  const [top, bottom] = token.split("/");
  if (!top || !bottom) return null;

  const numerator = Number(top);
  const denominator = Number(bottom);

  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) {
    return null;
  }

  return `${(numerator / denominator) * 100}%`;
}

function readColor(colors, token) {
  const arbitrary = extractArbitraryValue(token);
  if (arbitrary !== null) return arbitrary;
  return colors[token] || token;
}

function resolveSpacingValue(token, config) {
  if (token === "auto") return "auto";

  const arbitrary = extractArbitraryValue(token);
  if (arbitrary !== null) return arbitrary;

  const num = toNumber(token);
  if (num === null) return null;

  return `${num * config.scale}px`;
}

function resolveDimensionValue(token, axis) {
  const map = {
    auto: "auto",
    full: "100%",
    screen: axis === "w" ? "100vw" : "100vh",
    fit: "fit-content",
    min: "min-content",
    max: "max-content",
  };

  if (map[token]) return map[token];

  const arbitrary = extractArbitraryValue(token);
  if (arbitrary !== null) return arbitrary;

  if (token.includes("/")) {
    const fraction = parseFraction(token);
    if (fraction !== null) return fraction;
  }

  const num = toNumber(token);
  if (num === null) return null;

  // Preserve original behavior for compatibility.
  return axis === "w" ? `${num}%` : `${num}vh`;
}

function parseSpacingUtility(prefix, token, config) {
  const value = resolveSpacingValue(token, config);
  if (value === null) return null;

  if (prefix === "p") return { padding: value };
  if (prefix === "pt") return { paddingTop: value };
  if (prefix === "pb") return { paddingBottom: value };
  if (prefix === "pl") return { paddingLeft: value };
  if (prefix === "pr") return { paddingRight: value };

  if (prefix === "px") {
    return { paddingLeft: value, paddingRight: value };
  }

  if (prefix === "py") {
    return { paddingTop: value, paddingBottom: value };
  }

  if (prefix === "m") return { margin: value };
  if (prefix === "mt") return { marginTop: value };
  if (prefix === "mb") return { marginBottom: value };
  if (prefix === "ml") return { marginLeft: value };
  if (prefix === "mr") return { marginRight: value };

  if (prefix === "mx") {
    return { marginLeft: value, marginRight: value };
  }

  if (prefix === "my") {
    return { marginTop: value, marginBottom: value };
  }

  return null;
}

export function parseClass(cls, config = defaultConfig) {
  const normalizedConfig = resolveConfig(config);
  const raw = stripUtilityPrefix(cls, normalizedConfig.prefixes);

  if (raw === null) return null;

  if (staticStyles[raw]) {
    return staticStyles[raw];
  }

  let match = raw.match(/^(p|pt|pb|pl|pr|px|py)-(.+)$/);
  if (match) {
    return parseSpacingUtility(match[1], match[2], normalizedConfig);
  }

  match = raw.match(/^(m|mt|mb|ml|mr|mx|my)-(.+)$/);
  if (match) {
    return parseSpacingUtility(match[1], match[2], normalizedConfig);
  }

  match = raw.match(/^bg-(.+)$/);
  if (match) {
    return { backgroundColor: readColor(normalizedConfig.colors, match[1]) };
  }

  match = raw.match(/^text-(.+)$/);
  if (match) {
    const token = match[1];

    if (token === "left" || token === "center" || token === "right" || token === "justify") {
      return { textAlign: token };
    }

    if (textSizeMap[token]) {
      return { fontSize: textSizeMap[token] };
    }

    return { color: readColor(normalizedConfig.colors, token) };
  }

  match = raw.match(/^fs-(.+)$/);
  if (match) {
    const arbitrary = extractArbitraryValue(match[1]);
    if (arbitrary !== null) return { fontSize: arbitrary };
    const num = toNumber(match[1]);
    return num === null ? null : { fontSize: `${num}px` };
  }

  match = raw.match(/^lh-(.+)$/);
  if (match) {
    const arbitrary = extractArbitraryValue(match[1]);
    if (arbitrary !== null) return { lineHeight: arbitrary };
    const num = toNumber(match[1]);
    return num === null ? null : { lineHeight: `${num}px` };
  }

  match = raw.match(/^fw-(.+)$/);
  if (match) {
    const num = toNumber(match[1]);
    return num === null ? null : { fontWeight: num };
  }

  match = raw.match(/^font-(.+)$/);
  if (match) {
    const token = match[1];
    const arbitrary = extractArbitraryValue(token);
    if (arbitrary !== null) return { fontFamily: arbitrary };
    return { fontWeight: fontWeightMap[token] || token };
  }

  match = raw.match(/^w-(.+)$/);
  if (match) {
    const width = resolveDimensionValue(match[1], "w");
    return width === null ? null : { width };
  }

  match = raw.match(/^h-(.+)$/);
  if (match) {
    const height = resolveDimensionValue(match[1], "h");
    return height === null ? null : { height };
  }

  match = raw.match(/^(min-w|max-w|min-h|max-h)-(.+)$/);
  if (match) {
    const key = match[1];
    const token = match[2];
    const arbitrary = extractArbitraryValue(token);

    if (arbitrary !== null) {
      if (key === "min-w") return { minWidth: arbitrary };
      if (key === "max-w") return { maxWidth: arbitrary };
      if (key === "min-h") return { minHeight: arbitrary };
      return { maxHeight: arbitrary };
    }

    if (token === "full") {
      if (key === "min-w") return { minWidth: "100%" };
      if (key === "max-w") return { maxWidth: "100%" };
      if (key === "min-h") return { minHeight: "100%" };
      return { maxHeight: "100%" };
    }

    const num = toNumber(token);
    if (num === null) return null;

    if (key === "min-w") return { minWidth: `${num}px` };
    if (key === "max-w") return { maxWidth: `${num}px` };
    if (key === "min-h") return { minHeight: `${num}px` };
    return { maxHeight: `${num}px` };
  }

  match = raw.match(/^grow-(.+)$/);
  if (match) {
    const num = toNumber(match[1]);
    return num === null ? null : { flexGrow: num };
  }

  match = raw.match(/^shrink-(.+)$/);
  if (match) {
    const num = toNumber(match[1]);
    return num === null ? null : { flexShrink: num };
  }

  match = raw.match(/^basis-(.+)$/);
  if (match) {
    const token = match[1];
    if (token === "auto") return { flexBasis: "auto" };
    if (token === "full") return { flexBasis: "100%" };

    const arbitrary = extractArbitraryValue(token);
    if (arbitrary !== null) return { flexBasis: arbitrary };

    if (token.includes("/")) {
      const fraction = parseFraction(token);
      if (fraction !== null) return { flexBasis: fraction };
    }

    const num = toNumber(token);
    return num === null ? null : { flexBasis: `${num}%` };
  }

  match = raw.match(/^border-color-(.+)$/);
  if (match) {
    return { borderColor: readColor(normalizedConfig.colors, match[1]) };
  }

  match = raw.match(/^(border|border-t|border-b|border-l|border-r)-(.+)$/);
  if (match) {
    const side = match[1];
    const token = match[2];

    const arbitrary = extractArbitraryValue(token);
    if (arbitrary !== null) {
      if (side === "border") return { borderWidth: arbitrary };
      if (side === "border-t") return { borderTopWidth: arbitrary };
      if (side === "border-b") return { borderBottomWidth: arbitrary };
      if (side === "border-l") return { borderLeftWidth: arbitrary };
      return { borderRightWidth: arbitrary };
    }

    const num = toNumber(token);
    if (num === null) return null;

    if (side === "border") return { borderWidth: `${num}px`, borderStyle: "solid" };
    if (side === "border-t") return { borderTopWidth: `${num}px`, borderTopStyle: "solid" };
    if (side === "border-b") return { borderBottomWidth: `${num}px`, borderBottomStyle: "solid" };
    if (side === "border-l") return { borderLeftWidth: `${num}px`, borderLeftStyle: "solid" };
    return { borderRightWidth: `${num}px`, borderRightStyle: "solid" };
  }

  match = raw.match(/^rounded-(.+)$/);
  if (match) {
    const token = match[1];
    if (roundedMap[token]) return { borderRadius: roundedMap[token] };

    const arbitrary = extractArbitraryValue(token);
    if (arbitrary !== null) return { borderRadius: arbitrary };

    const num = toNumber(token);
    return num === null ? null : { borderRadius: `${num}px` };
  }

  match = raw.match(/^grid-cols-(.+)$/);
  if (match) {
    const token = match[1];
    if (token === "none") return { gridTemplateColumns: "none" };
    const num = toNumber(token);
    if (num === null) return null;
    return { gridTemplateColumns: `repeat(${num}, minmax(0, 1fr))` };
  }

  match = raw.match(/^grid-rows-(.+)$/);
  if (match) {
    const token = match[1];
    if (token === "none") return { gridTemplateRows: "none" };
    const num = toNumber(token);
    if (num === null) return null;
    return { gridTemplateRows: `repeat(${num}, minmax(0, 1fr))` };
  }

  match = raw.match(/^(gap|gap-x|gap-y)-(.+)$/);
  if (match) {
    const kind = match[1];
    const token = match[2];

    const arbitrary = extractArbitraryValue(token);
    if (arbitrary !== null) {
      if (kind === "gap") return { gap: arbitrary };
      if (kind === "gap-x") return { columnGap: arbitrary };
      return { rowGap: arbitrary };
    }

    const num = toNumber(token);
    if (num === null) return null;

    const size = `${num * normalizedConfig.scale}px`;
    if (kind === "gap") return { gap: size };
    if (kind === "gap-x") return { columnGap: size };
    return { rowGap: size };
  }

  match = raw.match(/^overflow(?:-(x|y))?-(.+)$/);
  if (match) {
    const axis = match[1];
    const value = match[2];

    if (!axis) return { overflow: value };
    if (axis === "x") return { overflowX: value };
    return { overflowY: value };
  }

  match = raw.match(/^opacity-(.+)$/);
  if (match) {
    const num = toNumber(match[1]);
    return num === null ? null : { opacity: num / 100 };
  }

  match = raw.match(/^duration-(.+)$/);
  if (match) {
    const arbitrary = extractArbitraryValue(match[1]);
    if (arbitrary !== null) return { transitionDuration: arbitrary };

    const num = toNumber(match[1]);
    return num === null ? null : { transitionDuration: `${num}ms` };
  }

  match = raw.match(/^(top|left|right|bottom)-(.+)$/);
  if (match) {
    const side = match[1];
    const token = match[2];

    let value;
    if (token === "auto") {
      value = "auto";
    } else if (token === "full") {
      value = "100%";
    } else {
      const arbitrary = extractArbitraryValue(token);
      if (arbitrary !== null) {
        value = arbitrary;
      } else {
        const num = toNumber(token);
        if (num === null) return null;
        value = `${num * normalizedConfig.scale}px`;
      }
    }

    if (side === "top") return { top: value };
    if (side === "left") return { left: value };
    if (side === "right") return { right: value };
    return { bottom: value };
  }

  match = raw.match(/^z-(.+)$/);
  if (match) {
    const num = toNumber(match[1]);
    return num === null ? null : { zIndex: num };
  }

  match = raw.match(/^aspect-(.+)$/);
  if (match) {
    const token = match[1];

    if (aspectRatioMap[token]) {
      return { aspectRatio: aspectRatioMap[token] };
    }

    const arbitrary = extractArbitraryValue(token);
    if (arbitrary !== null) return { aspectRatio: arbitrary };

    if (token.includes("/")) {
      const [w, h] = token.split("/");
      if (toNumber(w) !== null && toNumber(h) !== null && Number(h) !== 0) {
        return { aspectRatio: `${w} / ${h}` };
      }
    }

    return { aspectRatio: token };
  }

  match = raw.match(/^object-(.+)$/);
  if (match) {
    return { objectFit: match[1] };
  }

  match = raw.match(/^pointer-(.+)$/);
  if (match) {
    return { pointerEvents: match[1] };
  }

  return null;
}
