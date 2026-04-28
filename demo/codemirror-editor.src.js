import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import {
  HighlightStyle,
  defaultHighlightStyle,
  indentUnit,
  syntaxHighlighting,
} from "@codemirror/language";
import { html } from "@codemirror/lang-html";
import { tags } from "@lezer/highlight";
import { basicSetup } from "codemirror";

const kahwaHighlightStyle = HighlightStyle.define([
  { tag: tags.angleBracket, color: "#7dd3fc" },
  { tag: tags.tagName, color: "#7dd3fc", fontWeight: "700" },
  { tag: tags.attributeName, color: "#ffe08a" },
  { tag: tags.attributeValue, color: "#9ee6a1" },
  { tag: tags.string, color: "#9ee6a1" },
  { tag: tags.comment, color: "#8b93a7", fontStyle: "italic" },
  { tag: tags.keyword, color: "#f7a95d" },
]);

const kahwaTheme = EditorView.theme({
  "&": {
    height: "100%",
    color: "#f5f5f5",
    backgroundColor: "transparent",
    fontFamily: 'Consolas, "Courier New", monospace',
    fontSize: "0.88rem",
  },
  ".cm-scroller": {
    overflow: "auto",
    minHeight: "var(--editor-min-height, 220px)",
    lineHeight: "1.55",
  },
  ".cm-content, .cm-gutter": {
    paddingTop: "14px",
    paddingBottom: "14px",
  },
  ".cm-line": {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  ".cm-gutters": {
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    color: "#7f8798",
    borderRight: "1px solid rgba(255, 255, 255, 0.06)",
  },
  ".cm-activeLine": {
    backgroundColor: "rgba(255, 255, 255, 0.04)",
  },
  ".cm-activeLineGutter": {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
  },
  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground, ::selection":
    {
      backgroundColor: "rgba(144, 172, 255, 0.28)",
    },
  "&.cm-focused": {
    outline: "none",
  },
  ".cm-cursor, .cm-dropCursor": {
    borderLeftColor: "#ffe88f",
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    border: "none",
    color: "#c7cfdf",
  },
});

export function createCodeMirrorEditor(textarea) {
  const host = document.createElement("div");
  host.className = "play-editor-shell";
  host.style.setProperty(
    "--editor-min-height",
    `calc(${Math.max(Number(textarea.rows) || 10, 8)} * 1.55em + 28px)`,
  );

  textarea.dataset.cmHidden = "true";
  textarea.setAttribute("aria-hidden", "true");
  textarea.before(host);

  let suppressInputEvent = false;

  const view = new EditorView({
    state: EditorState.create({
      doc: textarea.value,
      extensions: [
        basicSetup,
        html(),
        indentUnit.of("  "),
        EditorState.tabSize.of(2),
        EditorView.lineWrapping,
        kahwaTheme,
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        syntaxHighlighting(kahwaHighlightStyle),
        EditorView.updateListener.of((update) => {
          if (!update.docChanged) return;

          textarea.value = update.state.doc.toString();
          if (suppressInputEvent) return;

          textarea.dispatchEvent(new Event("input", { bubbles: true }));
        }),
      ],
    }),
    parent: host,
  });

  if (textarea.id) {
    document
      .querySelectorAll(`label[for="${textarea.id}"]`)
      .forEach((label) => {
        label.addEventListener("click", () => {
          window.requestAnimationFrame(() => view.focus());
        });
      });
  }

  const api = {
    focus() {
      view.focus();
    },
    getValue() {
      return view.state.doc.toString();
    },
    setValue(nextValue, options = {}) {
      const nextDoc = `${nextValue ?? ""}`;
      const currentDoc = view.state.doc.toString();

      textarea.value = nextDoc;
      if (nextDoc === currentDoc) {
        if (!options.silent) {
          textarea.dispatchEvent(new Event("input", { bubbles: true }));
        }
        return;
      }

      suppressInputEvent = !!options.silent;
      view.dispatch({
        changes: { from: 0, to: currentDoc.length, insert: nextDoc },
      });
      suppressInputEvent = false;
    },
    refreshFromTextarea(options = {}) {
      api.setValue(textarea.value, options);
    },
  };

  textarea._codeMirror = api;
  return api;
}
