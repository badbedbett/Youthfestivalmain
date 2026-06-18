const REFERENCE_TITLES = ['ИНТЕРАКТИВНЫЕ ПЛОЩАДКИ', 'ПАРТНЁРСКИЕ ПЛОЩАДКИ'] as const
const LINE_HEIGHT = 1.12
const MAX_LINES = 2
const MIN_SIZE = 48
const MAX_SIZE = 120
const MOBILE_MIN_SIZE = 28
const MOBILE_MAX_SIZE = 44

function countLines(el: HTMLElement, fontSize: number): number {
  const lineHeightPx = fontSize * LINE_HEIGHT
  if (lineHeightPx <= 0) return 1
  return Math.max(1, Math.ceil(el.scrollHeight / lineHeightPx - 0.01))
}

function titleFitsInLines(el: HTMLElement, size: number): boolean {
  el.style.fontSize = `${size}px`
  return countLines(el, size) <= MAX_LINES
}

function createMeasureElement(maxWidth: number, title: string): HTMLHeadingElement {
  const el = document.createElement('h2')
  el.className = 'section-display-title sport-header-title-text'
  el.style.cssText = `
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    left: -9999px;
    top: 0;
    font-family: "Dela Gothic One", cursive;
    line-height: ${LINE_HEIGHT};
    white-space: normal;
    word-break: normal;
    overflow-wrap: normal;
    width: ${maxWidth}px;
    margin: 0;
    padding: 0;
    letter-spacing: 0;
  `

  const span = document.createElement('span')
  span.className = 'gradient-text-warm'
  span.style.cssText = `
    display: block;
    width: 100%;
    max-width: 100%;
    line-height: ${LINE_HEIGHT};
    white-space: normal;
    word-break: normal;
    overflow-wrap: normal;
    margin: 0;
    padding: 0;
  `
  span.textContent = title
  el.appendChild(span)
  document.body.appendChild(el)
  return el
}

function measureTitleAtWidth(
  maxWidth: number,
  title: string,
  minSize: number,
  maxSize: number,
): number {
  const el = createMeasureElement(maxWidth, title)
  const span = el.querySelector('span') as HTMLElement

  let low = minSize
  let high = maxSize
  let best = minSize

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    el.style.fontSize = `${mid}px`
    span.style.fontSize = `${mid}px`

    if (titleFitsInLines(span, mid)) {
      best = mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  document.body.removeChild(el)
  return best
}

export function measureProgramTitleFontSize(
  maxWidth: number,
  minSize = MIN_SIZE,
  maxSize = MAX_SIZE,
): number {
  return REFERENCE_TITLES.reduce(
    (size, title) => Math.min(size, measureTitleAtWidth(maxWidth, title, minSize, maxSize)),
    maxSize,
  )
}

export function getProgramTitleMaxWidth(bodyEl: HTMLElement): number {
  const gap = 48
  const metaReserve = 260
  const hasLogo = !!bodyEl.querySelector('.sport-header-logo-wrap')

  if (window.innerWidth <= 768) {
    const titleWrap = bodyEl.querySelector('.sport-header-title') as HTMLElement | null
    return Math.max(280, titleWrap?.clientWidth ?? bodyEl.clientWidth)
  }

  if (hasLogo) {
    return Math.max(320, bodyEl.clientWidth - metaReserve - gap)
  }

  const titleWrap = bodyEl.querySelector('.sport-header-title') as HTMLElement | null
  if (titleWrap?.clientWidth) {
    return Math.max(320, titleWrap.clientWidth)
  }

  return Math.max(320, bodyEl.clientWidth - metaReserve - gap)
}

let pendingFrame = 0
let lastAppliedSize = 0

async function ensureTitleFontLoaded(): Promise<void> {
  if (!document.fonts?.load) return

  await Promise.all([
    document.fonts.load('48px "Dela Gothic One"'),
    document.fonts.load('120px "Dela Gothic One"'),
  ]).catch(() => undefined)

  await document.fonts.ready
}

export async function applyProgramSectionTitleSize(bodyEl: HTMLElement): Promise<void> {
  await ensureTitleFontLoaded()

  const isMobile = window.innerWidth <= 768
  const maxTitleWidth = getProgramTitleMaxWidth(bodyEl)
  const size = measureProgramTitleFontSize(
    maxTitleWidth,
    isMobile ? MOBILE_MIN_SIZE : MIN_SIZE,
    isMobile ? MOBILE_MAX_SIZE : MAX_SIZE,
  )

  if (size === lastAppliedSize) return
  lastAppliedSize = size
  document.documentElement.style.setProperty('--program-section-title-size', `${size}px`)
}

export function scheduleProgramSectionTitleSize(bodyEl: HTMLElement): void {
  cancelAnimationFrame(pendingFrame)
  pendingFrame = requestAnimationFrame(() => {
    pendingFrame = requestAnimationFrame(() => {
      void applyProgramSectionTitleSize(bodyEl)
    })
  })
}
