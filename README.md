# `@source` on one file in `node_modules` scans its whole folder

`ui-lib` (installed from `ui-lib-1.0.0.tgz`, so it is a real folder in `node_modules`) has two files:

- `dist/button.js` uses `bg-red-500`
- `dist/card.js` uses `bg-blue-500`

`src/index.html` uses `p-4`.

```sh
npm install
npm run build
```

| Input | Expected | Actual (4.3.3 and `0.0.0-insiders.8cc0551`) |
| --- | --- | --- |
| `css/input-no-source.css`: `@import "tailwindcss"` | `p-4` | `p-4` |
| `css/input.css`: the same plus `@source "../node_modules/ui-lib/dist/button.js"` | `p-4`, `bg-red-500` | `p-4`, `bg-red-500`, `bg-blue-500` |
| `css/input-source-none.css`: `source(none)`, `@source "../src"` and the same `button.js` | `p-4`, `bg-red-500` | `p-4`, `bg-red-500` |

`check.mjs` prints which of the three classes each output contains.
