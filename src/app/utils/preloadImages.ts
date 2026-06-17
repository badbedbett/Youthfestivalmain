import { programImg } from '../data/programImages'

const PROGRAM_CARD_NAMES = [
  'sport',
  'patriot',
  'career',
  'health',
  'education',
  'stage',
  'interactive',
  'partners',
] as const

const DETAIL_IMAGES: Array<[folder: string, name: string]> = [
  ['sport', 'yaratam'],
  ['sport', 'bmx'],
  ['sport', 'samokat'],
  ['sport', 'workout'],
  ['sport', 'parkour'],
  ['sport', 'dance'],
  ['sport', 'media-basket'],
  ['sport', 'rollers'],
  ['sport', 'jiu-jitsu'],
  ['sport', 'bilain'],
  ['patriot', 'obstacle'],
  ['patriot', 'rkka'],
  ['career', 'interview'],
  ['career', 'contest'],
  ['career', 'quest'],
  ['career', 'city'],
  ['career', 'tent'],
  ['career', 'fashion'],
  ['career', 'talkshow'],
  ['career', 'consult'],
  ['career', 'fair'],
  ['career', 'tech'],
  ['career', 'care-point'],
  ['health', 'screening'],
  ['health', 'hiv-test'],
  ['health', 'kinesiology'],
  ['health', 'nutrition'],
  ['health', 'first-aid'],
  ['health', 'psychology'],
  ['health', 'art-therapy'],
  ['health', 'doctor-dates'],
]

export const ALL_PROGRAM_IMAGE_URLS = [
  ...PROGRAM_CARD_NAMES.map(name => `/images/programs/${name}.png`),
  ...DETAIL_IMAGES.map(([folder, name]) => programImg(folder, name)),
]

export const PROGRAM_CARD_IMAGE_URLS = PROGRAM_CARD_NAMES.map(
  name => `/images/programs/${name}.png`
)

const preloaded = new Set<string>()

export function preloadImages(urls: Iterable<string | null | undefined>) {
  for (const src of urls) {
    if (!src || preloaded.has(src)) continue
    preloaded.add(src)
    const img = new Image()
    img.decoding = 'async'
    img.src = src
  }
}

export function preloadAllProgramImages() {
  preloadImages(PROGRAM_CARD_IMAGE_URLS)
}
