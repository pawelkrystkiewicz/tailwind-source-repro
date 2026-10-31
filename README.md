# `@source` on one file in `node_modules` scans its whole folder

`ui-lib` is installed from `ui-lib-1.0.0.tgz`, so it is a real folder in `node_modules`:

- `dist/button.js` uses a red background class
- `dist/card.js` uses a blue background class

`src/index.html` uses a padding class. (Class names are kept out of this README and `check.mjs`, because automatic detection scans them too.)

```sh
npm install
npm run build
```

| Input | Expected | Actual (4.3.3 and `0.0.0-insiders.8cc0551`) |
| --- | --- | --- |
| `css/input-no-source.css`: `@import "tailwindcss"` | padding | padding |
| `css/input.css`: the same plus `@source "../node_modules/ui-lib/dist/button.js"` | padding, red | padding, red, **blue** |
| `css/input-source-none.css`: `source(none)`, `@source "../src"` and the same `button.js` | padding, red | padding, red |

`check.mjs` prints which of the three classes each output contains.
