import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve('public/images')
const educationDir = path.join(root, 'education')
const speakersDir = path.join(root, 'speakers')
const avatarSize = 128

const fromSpeakers = {
  'lera-veiv.jpg': 'lera-veiv.jpg',
  'yasmin-buali.jpg': 'yasmin-buali.jpg',
  'dmitry-yakovlev.jpg': 'dmitry-yakovlev.jpg',
  'liza-livada.jpg': 'liza-livada.jpg',
  'maria-kvad.jpg': 'maria-kvad.jpg',
  'sergey-mezentsev.jpg': 'sergey-mezentsev.jpg',
  'timur-dalgatov.jpg': 'tima-fermer.jpg',
}

async function writeAvatar(input, output) {
  const before = fs.statSync(input).size
  const tmp = `${output}.tmp`
  await sharp(input)
    .rotate()
    .resize(avatarSize, avatarSize, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(tmp)
  fs.renameSync(tmp, output)
  const after = fs.statSync(output).size
  return { before, after }
}

let beforeTotal = 0
let afterTotal = 0

for (const [eduName, speakerName] of Object.entries(fromSpeakers)) {
  const input = path.join(speakersDir, speakerName)
  const output = path.join(educationDir, eduName)
  if (!fs.existsSync(input)) {
    console.warn(`Skip ${eduName}: missing ${speakerName}`)
    continue
  }
  const { before, after } = await writeAvatar(input, output)
  beforeTotal += before
  afterTotal += after
  console.log(`${eduName} (from speakers): ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`)
}

for (const name of fs.readdirSync(educationDir)) {
  if (!/\.jpe?g$/i.test(name) || fromSpeakers[name]) continue
  const file = path.join(educationDir, name)
  const { before, after } = await writeAvatar(file, file)
  beforeTotal += before
  afterTotal += after
  console.log(`${name}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`)
}

console.log(
  `\nDone. ${(beforeTotal / 1024 / 1024).toFixed(1)} MB -> ${(afterTotal / 1024).toFixed(1)} KB`
)
