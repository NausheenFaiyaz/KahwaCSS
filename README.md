# KahwaCSS

KahwaCSS is a lightweight runtime utility engine that parses `kw-*` classes and applies styles inline with JavaScript.

It is designed for:

- Zero-build utility styling
- Fast prototyping
- Dynamic UIs where nodes/classes change at runtime

---

## Table of Contents

- [Project Links](#project-links)
- [What It Is](#what-it-is)
- [Installation](#installation)
- [Usage](#usage)
- [How The Engine Works](#how-the-engine-works)
- [Configuration](#configuration)
- [Built-in Utility Coverage](#built-in-utility-coverage)
- [Utility Syntax Reference](#utility-syntax-reference)
- [Examples](#examples)
- [Exports](#exports)
- [Current Constraints](#current-constraints)
- [Development](#development)
- [License](#license)

---

## Project Links

- **Live Demo (Hosted):** [https://kahwa-css.vercel.app/]
- **Demo Video:** [https://www.youtube.com/watch?v=5OnFs72oE98]
- **Twitter (X) Post:** [https://x.com/codeXninjaDev/status/2049124232349757705]
- **LinkedIn Post:** [https://www.linkedin.com/feed/update/urn:li:activity:7454892854771884032/]

---

## What It Is

KahwaCSS scans the DOM for classes that include the `kw-` prefix, parses each utility token, and applies the resulting style object directly to the element.

Example:

```html
<div class="kw-p-4 kw-bg-blue kw-rounded-xl kw-text-white">Hello</div>
```

At runtime this becomes inline styles (for example `padding`, `backgroundColor`, `borderRadius`, `color`).

---

## Installation

### npm

```bash
npm i kahwacss
```

### CDN (jsDelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/kahwacss@1.0.4/dist/kahwacss.cdn.min.js"></script>
<script>
  KahwaCSS.init();
</script>
```

You can also use unpkg:

```html
<script src="https://unpkg.com/kahwacss@1.0.4/dist/kahwacss.cdn.min.js"></script>
```

---

## Usage

### npm (bundler/dev server)

```js
import { initKahwaCSS } from "kahwacss";

initKahwaCSS();
```

Use this form in apps powered by Vite, Webpack, Parcel, Next.js, etc.

### npm (plain browser test without bundler)

If you are testing in a raw HTML file, the browser cannot resolve `import ... from "kahwacss"` directly.
Use the installed file path instead:

```html
<script type="module">
  import initKahwaCSS from "./node_modules/kahwacss/dist/index.js";
  initKahwaCSS();
</script>
```

Serve the folder over HTTP for testing:

```bash
npx serve .
```

### With config (npm)

```js
import { initKahwaCSS } from "kahwacss";

initKahwaCSS({
  scale: 4,
  colors: {
    brand: "#0ea5e9",
    ink: "#111827",
  },
});
```

---

## How The Engine Works

1. `initKahwaCSS()` resolves config and waits for DOM readiness.
2. `scanDOM(document.body, config)` applies styles to matching elements.
3. `observeDOM(config)` watches:
   - added nodes
   - class attribute changes
4. Updates are batched with `requestAnimationFrame` for efficient flush.
5. `applyStyles()` caches applied utility classes in `data-kahwa-classes` to reduce redundant work.

---

## Configuration

```js
initKahwaCSS({
  scale: 4, // used for spacing/gap/inset numeric transforms
  colors: {
    // merged with defaults
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
});
```

Important: Prefix is intentionally locked to `kw-` by the engine.

---

## Built-in Utility Coverage

### Display + Visibility

- `kw-block`, `kw-inline`, `kw-inline-block`
- `kw-hidden`
- `kw-flex`, `kw-inline-flex`
- `kw-grid`, `kw-inline-grid`
- `kw-table`, `kw-inline-table`, `kw-table-row`, `kw-table-cell`
- `kw-contents`
- `kw-visible`, `kw-invisible`

### Flexbox + Alignment

- `kw-flex-col`, `kw-flex-row`, `kw-flex-wrap`, etc.
- `kw-flex-1`, `kw-flex-auto`, `kw-flex-none`, etc.
- `kw-items-center|start|end|baseline|stretch`
- `kw-justify-start|center|end|between|around|evenly`
- `kw-grow-{n}`, `kw-shrink-{n}`, `kw-basis-{token}`

### Spacing

- `kw-p-*`, `kw-pt-*`, `kw-pr-*`, `kw-pb-*`, `kw-pl-*`, `kw-px-*`, `kw-py-*`
- `kw-m-*`, `kw-mt-*`, `kw-mr-*`, `kw-mb-*`, `kw-ml-*`, `kw-mx-*`, `kw-my-*`
- Supports:
  - numeric tokens (`kw-p-4`)
  - `auto` where valid (`kw-mx-auto`)
  - arbitrary values (`kw-p-[18px]`)

### Colors + Typography

- `kw-bg-{color}`
- `kw-text-{color}`
- `kw-text-xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl`
- `kw-fs-{n|[value]}`
- `kw-lh-{n|[value]}`
- `kw-fw-{n}`
- `kw-font-{weightToken|[family]}`
- `kw-bold`, `kw-italic`, `kw-underline`, `kw-line-through`, `kw-no-underline`
- `kw-uppercase`, `kw-lowercase`, `kw-capitalize`, `kw-normal-case`
- `kw-text-left|center|right|justify`

### Sizing

- `kw-w-{token}`, `kw-h-{token}`
- `kw-min-w-*`, `kw-max-w-*`, `kw-min-h-*`, `kw-max-h-*`
- Keywords like `auto`, `full`, `screen`, `fit`, `min`, `max`
- Fractions where supported (for example `kw-w-1/2`)
- Arbitrary values (for example `kw-w-[320px]`)

### Border + Radius + Shadow

- `kw-border`, `kw-border-0`
- `kw-border-{n|[value]}`
- `kw-border-t-*`, `kw-border-b-*`, `kw-border-l-*`, `kw-border-r-*`
- `kw-border-color-{color}`
- `kw-rounded`, `kw-rounded-none|sm|md|lg|xl|2xl|full`
- `kw-rounded-{n|[value]}`
- `kw-shadow-none|shadow|shadow-sm|shadow-md|shadow-lg|shadow-xl`

### Grid + Gap

- `kw-grid-cols-{n|none}`
- `kw-grid-rows-{n|none}`
- `kw-gap-*`, `kw-gap-x-*`, `kw-gap-y-*`

### Positioning + Layering

- `kw-static`, `kw-relative`, `kw-absolute`, `kw-fixed`, `kw-sticky`
- `kw-top-*`, `kw-right-*`, `kw-bottom-*`, `kw-left-*`
- `kw-z-{n}`

### Overflow + Interaction + Media

- `kw-overflow-hidden|auto|scroll|visible`
- `kw-overflow-x-*`, `kw-overflow-y-*`
- `kw-pointer-none|auto` and `kw-pointer-*`
- `kw-cursor-pointer|not-allowed|move|default|text`
- `kw-object-contain|cover|fill|none|scale-down` and `kw-object-*`
- `kw-aspect-auto|square|video`, `kw-aspect-{w/h}`, `kw-aspect-[value]`
- `kw-list-none|disc|decimal`
- `kw-whitespace-normal|nowrap|pre|pre-wrap`

### Effects + Motion

- `kw-opacity-{n}` (0-100 mapped to 0-1)
- `kw-transition`
- `kw-transition-colors`
- `kw-transition-opacity`
- `kw-transition-transform`
- `kw-duration-{n|[value]}`

---

## Utility Syntax Reference

### Arbitrary values

Use brackets to inject custom values where supported:

- `kw-w-[420px]`
- `kw-bg-[#111111]`
- `kw-rounded-[18px]`
- `kw-gap-x-[14px]`

### Fractions

Where supported:

- `kw-w-1/2` -> `50%`
- `kw-basis-2/3` -> `66.666...%`
- `kw-aspect-4/3` -> `aspect-ratio: 4 / 3`

### Spacing scale

Spacing and gap numeric tokens use:

`value = token * scale`

Default `scale = 4`:

- `kw-p-2` -> `8px`
- `kw-gap-3` -> `12px`
- `kw-top-4` -> `16px`

---

## Examples

### Card

```html
<article class="kw-bg-[#fff0c8] kw-p-4 kw-rounded-2xl kw-border-1 kw-border-color-black kw-shadow-md">
  <h3 class="kw-text-xl kw-bold kw-mb-2">Kahwa Card</h3>
  <p class="kw-text-sm">Runtime utility styling, no build required.</p>
</article>
```

### Grid layout

```html
<div class="kw-grid kw-grid-cols-3 kw-gap-3">
  <div class="kw-bg-white kw-border-1 kw-border-color-black kw-p-3">A</div>
  <div class="kw-bg-white kw-border-1 kw-border-color-black kw-p-3">B</div>
  <div class="kw-bg-white kw-border-1 kw-border-color-black kw-p-3">C</div>
</div>
```

---

## Exports

From package entry:

- `initKahwaCSS(userConfig?)`
- `scanDOM(root?, config)`
- `applyStyles(el, config)`
- `observeDOM(config)`
- `defaultConfig`
- `resolveConfig(userConfig?)`
- `parseClass(cls, config?)`

---

## Current Constraints

- Prefix support is intentionally fixed to `kw-`.
- Inline style assignment is the styling strategy (no generated stylesheet).
- Utility support is parser-driven; unsupported tokens are ignored safely.

---

## Development

```bash
npm test
npm run build
```

Publish checklist:

1. `npm test`
2. `npm run build`
3. `npm login`
4. `npm publish --access public`

---

## License

MIT
