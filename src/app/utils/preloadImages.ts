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

export const SPEAKER_IMAGE_URLS = [
  '/images/speakers/lone-headliner.jpg',
  '/images/speakers/voroberian.jpg',
  '/images/speakers/trio-khyal.jpg',
  '/images/speakers/amikoband.jpg',
  '/images/speakers/kamilluna.jpg',
  '/images/speakers/dozhdi-iyulya.jpg',
  '/images/speakers/rebless.jpg',
  '/images/speakers/marusya.jpg',
  '/images/speakers/whoa.jpg',
  '/images/speakers/ovak.jpg',
  '/images/speakers/midin.jpg',
  '/images/speakers/hopeles.jpg',
  '/images/speakers/mayls.jpg',
  '/images/speakers/maikryz.jpg',
  '/images/speakers/paru-nochey.jpg',
  '/images/speakers/yasmin-buali.jpg',
  '/images/speakers/lera-veiv.jpg',
  '/images/speakers/dmitry-yakovlev.jpg',
  '/images/speakers/liza-livada.jpg',
  '/images/speakers/maria-kvad.jpg',
  '/images/speakers/tima-fermer.jpg',
  '/images/speakers/sergey-mezentsev.jpg',
  '/images/speakers/vitaly-zuev.jpg',
  '/images/speakers/artem-anisimov.jpg',
  '/images/speakers/grigory-anfilofeev.jpg',
  '/images/speakers/dmitry-dvoynishnikov.jpg',
  '/images/speakers/emin-aliev.jpg',
  '/images/speakers/nikita-sekh.jpg',
  '/images/speakers/pavel-elsukov.jpg',
  '/images/speakers/mikhail-okatev.jpg',
  '/images/speakers/matvey-sharygin.jpg',
  '/images/speakers/andrey-skvortsov.jpg',
  '/images/speakers/artem-kuznetsov.jpg',
  '/images/speakers/artem-agarkov.jpg',
  '/images/speakers/grigory-usenko.jpg',
  '/images/speakers/vlad-samokatchik.jpg',
] as const

export const PRIORITY_IMAGE_URLS = [
  '/images/speakers/lone-headliner.jpg',
  ...PROGRAM_CARD_NAMES.slice(0, 4).map(name => `/images/programs/${name}.png`),
] as const

export const ALL_PROGRAM_IMAGE_URLS = [
  ...PROGRAM_CARD_NAMES.map(name => `/images/programs/${name}.png`),
  ...DETAIL_IMAGES.map(([folder, name]) => programImg(folder, name)),
  '/images/stage/headliner.png',
  '/images/sport/roliki.jpg',
  '/images/sport/bmx-street.jpg',
  '/images/sport/skate.jpg',
]

export const PROGRAM_CARD_IMAGE_URLS = PROGRAM_CARD_NAMES.map(
  name => `/images/programs/${name}.png`,
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

export function preloadPriorityImages() {
  preloadImages(PRIORITY_IMAGE_URLS)
}

export function preloadSpeakerImages() {
  preloadImages(SPEAKER_IMAGE_URLS)
}

export function preloadAllProgramImages() {
  preloadImages(ALL_PROGRAM_IMAGE_URLS)
}

export function preloadAllSiteImages() {
  preloadPriorityImages()
  preloadSpeakerImages()
  preloadAllProgramImages()
}
