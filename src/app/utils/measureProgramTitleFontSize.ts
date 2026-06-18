const REFERENCE_TITLE = 'ИНТЕРАКТИВНЫЕ ПЛОЩАДКИ'
const LINE_HEIGHT = 1.12
const MAX_LINES = 2
const MIN_SIZE = 42
const MAX_SIZE = 88
const MOBILE_MIN_SIZE = 28
const MOBILE_MAX_SIZE = 42

function titleFitsInLines(el: HTMLElement, size: number): boolean {
  el.style.fontSize = `${size}px`
  const maxHeight = size * LINE_HEIGHT * MAX_LINES + 6
  return el.scrollHeight <= maxHeight
}

function createMeasureElement(maxWidth: number): HTMLHeadingElement {
  const el = document.createElement('h2')
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
  el.textContent = REFERENCE_TITLE
  document.body.appendChild(el)
  return el
}

export function measureProgramTitleFontSize(
  maxWidth: number,
  minSize = MIN_SIZE,
  maxSize = MAX_SIZE,
): number {
  const el = createMeasureElement(maxWidth)

  let low = minSize
  let high = maxSize
  let best = minSize

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (titleFitsInLines(el, mid)) {
      best = mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  document.body.removeChild(el)
  return best
}

export function getProgramTitleMaxWidth(bodyEl: HTMLElement): number {
  const gap = 48
  const metaReserve = 260

  if (window.innerWidth <= 768) {
    return Math.max(280, bodyEl.clientWidth)
  }

  return Math.max(320, bodyEl.clientWidth - metaReserve - gap)
}

export function applyProgramSectionTitleSize(bodyEl: HTMLElement): void {
  const isMobile = window.innerWidth <= 768
  const maxTitleWidth = getProgramTitleMaxWidth(bodyEl)
  const size = measureProgramTitleFontSize(
    maxTitleWidth,
    isMobile ? MOBILE_MIN_SIZE : MIN_SIZE,
    isMobile ? MOBILE_MAX_SIZE : MAX_SIZE,
  )

  document.documentElement.style.setProperty('--program-section-title-size', `${size}px`)
}
