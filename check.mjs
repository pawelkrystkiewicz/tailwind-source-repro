import fs from 'node:fs'
// Class names are split so Tailwind's own scan of this file doesn't find them
const classes = ['p-' + '4', 'bg-red-' + '500', 'bg-blue-' + '500']
for (const file of ['out-no-source.css', 'out.css', 'out-source-none.css']) {
  const css = fs.readFileSync(file, 'utf8')
  console.log(`${file}: ${classes.filter(c => css.includes(`.${c}`)).join(', ')}`)
}
