import test from "node:test";
import assert from "node:assert/strict";
import { parseClass, resolveConfig } from "../src/parser.js";

const config = resolveConfig();

test("only kw prefix is accepted", () => {
  assert.deepEqual(parseClass("kw-p-2", config), { padding: "8px" });
  assert.equal(parseClass("chai-p-2", config), null);
});

test("spacing utilities", () => {
  assert.deepEqual(parseClass("kw-p-2", config), { padding: "8px" });
  assert.deepEqual(parseClass("kw-px-3", config), { paddingLeft: "12px", paddingRight: "12px" });
  assert.deepEqual(parseClass("kw-my-auto", config), { marginTop: "auto", marginBottom: "auto" });
  assert.deepEqual(parseClass("kw-m-[-12px]", config), { margin: "-12px" });
});

test("color and text utilities", () => {
  assert.deepEqual(parseClass("kw-bg-red", config), { backgroundColor: "#ed3c3c" });
  assert.deepEqual(parseClass("kw-bg-[#111111]", config), { backgroundColor: "#111111" });
  assert.deepEqual(parseClass("kw-text-gray", config), { color: "#6b7280" });
  assert.deepEqual(parseClass("kw-text-3xl", config), { fontSize: "30px" });
  assert.deepEqual(parseClass("kw-text-center", config), { textAlign: "center" });
});

test("dimension utilities with fractions", () => {
  assert.deepEqual(parseClass("kw-w-full", config), { width: "100%" });
  assert.deepEqual(parseClass("kw-w-1/2", config), { width: "50%" });
  assert.deepEqual(parseClass("kw-h-screen", config), { height: "100vh" });
  assert.deepEqual(parseClass("kw-min-w-320", config), { minWidth: "320px" });
});

test("border and radius utilities", () => {
  assert.deepEqual(parseClass("kw-border-2", config), { borderWidth: "2px", borderStyle: "solid" });
  assert.deepEqual(parseClass("kw-border-color-blue", config), { borderColor: "#3b82f6" });
  assert.deepEqual(parseClass("kw-rounded-2xl", config), { borderRadius: "24px" });
  assert.deepEqual(parseClass("kw-rounded-[18px]", config), { borderRadius: "18px" });
});

test("layout and positioning utilities", () => {
  assert.deepEqual(parseClass("kw-grid-cols-3", config), { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" });
  assert.deepEqual(parseClass("kw-gap-4", config), { gap: "16px" });
  assert.deepEqual(parseClass("kw-top-2", config), { top: "8px" });
  assert.deepEqual(parseClass("kw-z-50", config), { zIndex: 50 });
  assert.deepEqual(parseClass("kw-aspect-video", config), { aspectRatio: "16 / 9" });
});

test("interaction and transition utilities", () => {
  assert.deepEqual(parseClass("kw-pointer-none", config), { pointerEvents: "none" });
  assert.deepEqual(parseClass("kw-object-cover", config), { objectFit: "cover" });
  assert.deepEqual(parseClass("kw-opacity-75", config), { opacity: 0.75 });
  assert.deepEqual(parseClass("kw-duration-300", config), { transitionDuration: "300ms" });
});

test("invalid tokens return null instead of crashing", () => {
  assert.equal(parseClass("kw-p-invalid", config), null);
  assert.equal(parseClass("kw-border-q", config), null);
  assert.equal(parseClass("kw-unknown-class", config), null);
});
