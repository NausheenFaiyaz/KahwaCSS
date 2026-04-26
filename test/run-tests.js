import assert from "node:assert/strict";
import { parseClass, resolveConfig } from "../src/parser.js";

const config = resolveConfig();

const checks = [
  ["kw prefix accepted", () => assert.deepEqual(parseClass("kw-p-2", config), { padding: "8px" })],
  ["non-kw prefix rejected", () => assert.equal(parseClass("chai-p-2", config), null)],
  ["spacing px", () => assert.deepEqual(parseClass("kw-px-3", config), { paddingLeft: "12px", paddingRight: "12px" })],
  ["spacing auto", () => assert.deepEqual(parseClass("kw-my-auto", config), { marginTop: "auto", marginBottom: "auto" })],
  ["spacing arbitrary", () => assert.deepEqual(parseClass("kw-m-[-12px]", config), { margin: "-12px" })],
  ["bg color map", () => assert.deepEqual(parseClass("kw-bg-red", config), { backgroundColor: "#ed3c3c" })],
  ["bg arbitrary", () => assert.deepEqual(parseClass("kw-bg-[#111111]", config), { backgroundColor: "#111111" })],
  ["text color map", () => assert.deepEqual(parseClass("kw-text-gray", config), { color: "#6b7280" })],
  ["text size", () => assert.deepEqual(parseClass("kw-text-3xl", config), { fontSize: "30px" })],
  ["text align", () => assert.deepEqual(parseClass("kw-text-center", config), { textAlign: "center" })],
  ["width full", () => assert.deepEqual(parseClass("kw-w-full", config), { width: "100%" })],
  ["width fraction", () => assert.deepEqual(parseClass("kw-w-1/2", config), { width: "50%" })],
  ["height screen", () => assert.deepEqual(parseClass("kw-h-screen", config), { height: "100vh" })],
  ["min width", () => assert.deepEqual(parseClass("kw-min-w-320", config), { minWidth: "320px" })],
  ["border width", () => assert.deepEqual(parseClass("kw-border-2", config), { borderWidth: "2px", borderStyle: "solid" })],
  ["border color", () => assert.deepEqual(parseClass("kw-border-color-blue", config), { borderColor: "#3b82f6" })],
  ["rounded token", () => assert.deepEqual(parseClass("kw-rounded-2xl", config), { borderRadius: "24px" })],
  ["rounded arbitrary", () => assert.deepEqual(parseClass("kw-rounded-[18px]", config), { borderRadius: "18px" })],
  ["grid cols", () => assert.deepEqual(parseClass("kw-grid-cols-3", config), { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" })],
  ["gap", () => assert.deepEqual(parseClass("kw-gap-4", config), { gap: "16px" })],
  ["position top", () => assert.deepEqual(parseClass("kw-top-2", config), { top: "8px" })],
  ["z index", () => assert.deepEqual(parseClass("kw-z-50", config), { zIndex: 50 })],
  ["aspect video", () => assert.deepEqual(parseClass("kw-aspect-video", config), { aspectRatio: "16 / 9" })],
  ["pointer events", () => assert.deepEqual(parseClass("kw-pointer-none", config), { pointerEvents: "none" })],
  ["object fit", () => assert.deepEqual(parseClass("kw-object-cover", config), { objectFit: "cover" })],
  ["opacity", () => assert.deepEqual(parseClass("kw-opacity-75", config), { opacity: 0.75 })],
  ["duration", () => assert.deepEqual(parseClass("kw-duration-300", config), { transitionDuration: "300ms" })],
  ["invalid spacing token", () => assert.equal(parseClass("kw-p-invalid", config), null)],
  ["invalid border token", () => assert.equal(parseClass("kw-border-q", config), null)],
  ["unknown utility", () => assert.equal(parseClass("kw-unknown-class", config), null)],
];

let passed = 0;

for (const [name, check] of checks) {
  try {
    check();
    passed += 1;
    console.log(`PASS: ${name}`);
  } catch (error) {
    console.error(`FAIL: ${name}`);
    console.error(error);
    process.exit(1);
  }
}

console.log(`\nAll tests passed (${passed}/${checks.length}).`);
