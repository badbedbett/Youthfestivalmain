import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
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

function relPosix(file) {
  return path.relative(root, file).split(path.sep).join('/')
}

async function optimizeFile(file) {
  const rel = relPosix(file)
  const ext = path.extname(file).toLowerCase()
  const before = fs.statSync(file).size

  if (ext === '.jpg' || ext === '.jpeg') {
    const isSpeaker = rel.startsWith('speakers/')
    const out = path.join(outRoot, rel.replace(/\.jpe?g$/i, '.jpg'))
    fs.mkdirSync(path.dirname(out), { recursive: true })

    await sharp(file)
      .rotate()
      .resize(isSpeaker ? 256 : 1280, isSpeaker ? 256 : 1280, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(out)

    const after = fs.statSync(out).size
    return { rel, before, after }
  }

  if (ext !== '.png') {
    const out = path.join(outRoot, rel)
    fs.mkdirSync(path.dirname(out), { recursive: true })
    fs.copyFileSync(file, out)
    return null
  }

  const isSpeakerPhoto =
    rel.startsWith('speakers/') &&
    !rel.includes('programs') &&
    rel !== 'speakers/lone-headliner.png'
  const isLoneHeadliner = rel === 'speakers/lone-headliner.png' || rel === 'speakers/lone-headliner.jpg'
  const isStage = rel.startsWith('stage/')
  const isProgramCard = rel.startsWith('programs/')

  if (isLoneHeadliner && ext === '.png') {
    const out = path.join(outRoot, 'speakers/lone-headliner.jpg')
    fs.mkdirSync(path.dirname(out), { recursive: true })
    await sharp(file)
      .rotate()
      .resize(512, 512, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(out)

    const after = fs.statSync(out).size
    return { rel: 'speakers/lone-headliner.jpg', before, after }
  }

  const out = path.join(outRoot, rel)
  fs.mkdirSync(path.dirname(out), { recursive: true })

  let pipeline = sharp(file).rotate()

  if (isStage) {
    pipeline = pipeline.resize(1200, null, { withoutEnlargement: true })
  } else if (isProgramCard) {
    pipeline = pipeline.resize(640, 640, { fit: 'inside', withoutEnlargement: true })
  }

  await pipeline
    .png({
      compressionLevel: 9,
      palette: true,
      quality: isStage ? 85 : 80,
      effort: 10,
    })
    .toFile(out)

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
    try {
      execSync(`robocopy "${outRoot}" "${root}" /E /IS /IT /NFL /NDL /NJH /NJS`, { stdio: 'inherit' })
      fs.rmSync(outRoot, { recursive: true, force: true })
    } catch {
      process.exitCode = 0
    }
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
    `${result.rel}: ${(result.before / 1024).toFixed(0)} KB -> ${(result.after / 1024).toFixed(0)} KB`,
  )
}

swapDirs()
console.log(
  `\nDone. ${(beforeTotal / 1024 / 1024).toFixed(1)} MB -> ${(afterTotal / 1024 / 1024).toFixed(1)} MB (saved ${(saved / 1024 / 1024).toFixed(1)} MB)`,
)
