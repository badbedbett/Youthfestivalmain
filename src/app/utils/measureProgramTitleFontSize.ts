const REFERENCE_TITLES = ['ИНТЕРАКТИВНЫЕ ПЛОЩАДКИ', 'ПАРТНЁРСКИЕ ПЛОЩАДКИ'] as const
const LINE_HEIGHT = 1.12
const MIN_SIZE = 48
const MAX_SIZE = 120
const MOBILE_MIN_SIZE = 28
const MOBILE_MAX_SIZE = 44
const META_RESERVE = 260
const TITLE_GAP = 48
const CONTENT_MAX = 1280

export function splitProgramTitle(title: string): { line1: string; line2: string | null } {
  const spaceIndex = title.indexOf(' ')
  if (spaceIndex === -1) {
    return { line1: title, line2: null }
  }

  return {
    line1: title.slice(0, spaceIndex),
    line2: title.slice(spaceIndex + 1),
  }
}

function measureTextWidth(text: string, fontSize: number): number {
  const el = document.createElement('span')
  el.style.cssText = `
    position: absolute;
    left: -9999px;
    top: 0;
    visibility: hidden;
    pointer-events: none;
    font-family: "Dela Gothic One", cursive;
    font-size: ${fontSize}px;
    line-height: ${LINE_HEIGHT};
    letter-spacing: 0;
    white-space: nowrap;
    margin: 0;
    padding: 0;
  `
  el.textContent = text
  document.body.appendChild(el)
  const width = el.getBoundingClientRect().width
  document.body.removeChild(el)
  return width
}

function measureTwoLineTitleSize(
  line1: string,
  line2: string,
  columnWidth: number,
  minSize: number,
  maxSize: number,
): number {
  let low = minSize
  let high = maxSize
  let best = minSize

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const fits =
      measureTextWidth(line1, mid) <= columnWidth &&
      measureTextWidth(line2, mid) <= columnWidth

    if (fits) {
      best = mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return best
}

export function measureProgramTitleFontSize(
  columnWidth: number,
  minSize = MIN_SIZE,
  maxSize = MAX_SIZE,
): number {
  return REFERENCE_TITLES.reduce((size, title) => {
    const { line1, line2 } = splitProgramTitle(title)
    if (!line2) return size
    return Math.min(size, measureTwoLineTitleSize(line1, line2, columnWidth, minSize, maxSize))
  }, maxSize)
}

export function estimateProgramTitleColumnWidth(viewportWidth = window.innerWidth): number {
  const sectionPad = Math.min(48, viewportWidth * 0.04) * 2

  if (viewportWidth <= 768) {
    return Math.max(280, viewportWidth - sectionPad)
  }

  const contentWidth = Math.min(CONTENT_MAX, viewportWidth - sectionPad)
  return Math.max(320, contentWidth - META_RESERVE - TITLE_GAP)
}

export function getProgramTitleMaxWidth(bodyEl: HTMLElement): number {
  const titleWrap = bodyEl.querySelector('.sport-header-title') as HTMLElement | null
  const hasLogo = !!bodyEl.querySelector('.sport-header-logo-wrap')

  if (window.innerWidth <= 768) {
    return Math.max(280, titleWrap?.clientWidth ?? bodyEl.clientWidth)
  }

  if (hasLogo) {
    return estimateProgramTitleColumnWidth()
  }

  if (titleWrap?.clientWidth) {
    return Math.max(320, titleWrap.clientWidth)
  }

  return estimateProgramTitleColumnWidth()
}

function getSizeLimits(): { min: number; max: number; columnWidth: number } {
  const isMobile = window.innerWidth <= 768
  return {
    min: isMobile ? MOBILE_MIN_SIZE : MIN_SIZE,
    max: isMobile ? MOBILE_MAX_SIZE : MAX_SIZE,
    columnWidth: estimateProgramTitleColumnWidth(),
  }
}

export function initProgramSectionTitleSize(): void {
  const { min, max, columnWidth } = getSizeLimits()
  const size = measureProgramTitleFontSize(columnWidth, min, max)
  document.documentElement.style.setProperty('--program-section-title-size', `${size}px`)
  markProgramTitlesSized()
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

function markProgramTitlesSized(): void {
  document.documentElement.classList.add('program-titles-sized')
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

  if (size !== lastAppliedSize) {
    lastAppliedSize = size
    document.documentElement.style.setProperty('--program-section-title-size', `${size}px`)
  }

  markProgramTitlesSized()
}

export function scheduleProgramSectionTitleSize(bodyEl: HTMLElement): void {
  cancelAnimationFrame(pendingFrame)
  pendingFrame = requestAnimationFrame(() => {
    pendingFrame = requestAnimationFrame(() => {
      void applyProgramSectionTitleSize(bodyEl)
    })
  })
}
