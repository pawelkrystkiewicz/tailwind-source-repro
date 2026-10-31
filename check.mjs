import fs from 'node:fs'
// Class names are split so Tailwind's own scan of this file doesn't find them
const classes = { padding: 'p-' + '4', red: 'bg-red-' + '500', blue: 'bg-blue-' + '500' }
for (const file of ['out-no-source.css', 'out.css', 'out-source-none.css']) {
  const css = fs.readFileSync(file, 'utf8')
  const found = Object.keys(classes).filter(k => css.includes(`.${classes[k]}`))
  console.log(`${file}: ${found.join(', ')}`)
}
