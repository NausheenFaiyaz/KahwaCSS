// Static utilities

const staticStyles = {
  // Display
  block: { display: "block" },
  inline: { display: "inline" },
  "inline-block": { display: "inline-block" },
  hidden: { display: "none" },

  // Flexbox
  flex: { display: "flex" },
  "inline-flex": { display: "iniline-flex" },

  "flex-col": { flexDirection: "column" },
  "flex-row": { flexDirection: "row" },
  "flex-wrap": { flexWrap: "wrap" },

  "items-center": { alignItems: "center" },
  "items-start": { alignItems: "flex-start" },
  "items-end": { alignItems: "flex-end" },

  "justify-center": { justifyContent: "center" },
  "justify-between": { justifyContent: "space-between" },
  "justify-end": { justifyContent: "flex-end" },

  // Position
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
  uppercase: { textTransform: "uppercase" },

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
};

const defaultConfig = {
  scale: 4,
  colors: {
    red: "#ed3c3c",
    blue: "#3b82f6",
    green: "#2cd169",
    pink :"#ff5d8f",
    black: "#000",
    white: "#fff",
    orange: "#f37649",
    gray: "#6b7280",
    yellow: "#ffe566",
    purple: "#deaaff",
    cyan :"#67e8f9",
    brown: "#8d4b28",
  },
};
