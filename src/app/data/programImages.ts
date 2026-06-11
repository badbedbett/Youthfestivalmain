/** Путь к картинке в public/images/{folder}/{name}.png — положите файл, сайт подхватит сам */
export function programImg(folder: string, name: string): string {
  return `/images/${folder}/${name}.png`
}
