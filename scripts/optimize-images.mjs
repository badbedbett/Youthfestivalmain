import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve('public/images')
const outRoot = path.resolve('public/images-optimized')

function walk(dir) {
  const entries = []
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) entries.push(...walk(full))
    else entries.push(full)
  }
  return entries
}

async function optimizeFile(file) {
  const rel = path.relative(root, file)
  const out = path.join(outRoot, rel)
  fs.mkdirSync(path.dirname(out), { recursive: true })

  const ext = path.extname(file).toLowerCase()
  const before = fs.statSync(file).size

  if (ext === '.jpg' || ext === '.jpeg') {
    const isSpeaker = rel.startsWith(`speakers${path.sep}`)
    await sharp(file)
      .rotate()
      .resize(isSpeaker ? 320 : 1280, isSpeaker ? 320 : 1280, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(out)
  } else if (ext === '.png') {
    await sharp(file)
      .png({ compressionLevel: 9, palette: true, quality: 80, effort: 10 })
      .toFile(out)
  } else {
    fs.copyFileSync(file, out)
    return null
  }

  const after = fs.statSync(out).size
  return { rel, before, after }
}

function swapDirs() {
  const backup = path.resolve('public/images-backup')
  if (fs.existsSync(backup)) fs.rmSync(backup, { recursive: true, force: true })
  try {
    fs.renameSync(root, backup)
    fs.renameSync(outRoot, root)
    fs.rmSync(backup, { recursive: true, force: true })
  } catch {
    console.log('\nCould not rename folders (files may be locked). Copy manually:')
    console.log(`  robocopy "${outRoot}" "${root}" /E /IS /IT`)
    process.exitCode = 0
  }
}

const files = walk(root).filter(f => /\.(jpe?g|png)$/i.test(f))
let saved = 0
let beforeTotal = 0
let afterTotal = 0

if (fs.existsSync(outRoot)) fs.rmSync(outRoot, { recursive: true, force: true })

for (const file of files) {
  const result = await optimizeFile(file)
  if (!result) continue
  beforeTotal += result.before
  afterTotal += result.after
  saved += result.before - result.after
  console.log(
    `${result.rel}: ${(result.before / 1024).toFixed(0)} KB -> ${(result.after / 1024).toFixed(0)} KB`
  )
}

swapDirs()
console.log(
  `\nDone. ${(beforeTotal / 1024 / 1024).toFixed(1)} MB -> ${(afterTotal / 1024 / 1024).toFixed(1)} MB (saved ${(saved / 1024 / 1024).toFixed(1)} MB)`
)
