export type ProgramScheduleItem = {
  time: string
  title?: string
  body: string
}

export type ParsedProgramSchedule = {
  intro?: string
  items: ProgramScheduleItem[]
  outro?: string
}

const TIME_PART =
  String.raw`\d{1,2}:\d{2}(?:\s*[–—-]\s*\d{1,2}:\d{2})?(?:\s*,\s*\d{1,2}:\d{2}(?:\s*[–—-]\s*\d{1,2}:\d{2})?)*(?:\s*\([^)]+\))?`

const TIME_WITH_DASH_TITLE = new RegExp(
  `^(${TIME_PART})(?:\\s*[–—-]\\s*(.+))?$`,
)

const TIME_WITH_SPACE_TITLE = new RegExp(`^(${TIME_PART})\\s+(.+)$`)

const GENERAL_OUTRO_START =
  /^(Здесь вы|Для участия|Подробности и правила регистрации|Регистрация(\s+по ссылке|\s+для|\s*:\s*https?))/i

function isTimeLine(line: string): boolean {
  return /^\d{1,2}:\d{2}/.test(line.trim())
}

function capitalizeScheduleTitle(title?: string): string | undefined {
  if (!title) return title
  const trimmed = title.trim()
  if (!trimmed) return title
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
}

function parseTimeLine(line: string): { time: string; title?: string } {
  const trimmed = line.trim()

  const dashMatch = trimmed.match(TIME_WITH_DASH_TITLE)
  if (dashMatch) {
    const time = dashMatch[1].trim()
    const title = dashMatch[2]?.trim()
    return { time, title: capitalizeScheduleTitle(title) }
  }

  const spaceMatch = trimmed.match(TIME_WITH_SPACE_TITLE)
  if (spaceMatch) {
    return {
      time: spaceMatch[1].trim(),
      title: capitalizeScheduleTitle(spaceMatch[2].trim()),
    }
  }

  if (isTimeLine(trimmed)) {
    return { time: trimmed }
  }

  return { time: trimmed }
}

function shouldStartOutro(line: string): boolean {
  return GENERAL_OUTRO_START.test(line.trim())
}

export function parseProgramSchedule(desc: string): ParsedProgramSchedule | null {
  const lines = desc.split('\n')
  const introLines: string[] = []
  let index = 0

  while (index < lines.length && !isTimeLine(lines[index])) {
    introLines.push(lines[index])
    index += 1
  }

  if (index >= lines.length) return null

  const items: ProgramScheduleItem[] = []

  while (index < lines.length && isTimeLine(lines[index].trim())) {
    const { time, title: inlineTitle } = parseTimeLine(lines[index].trim())
    index += 1

    let title = inlineTitle
    if (!title) {
      while (index < lines.length && !lines[index].trim()) index += 1
      if (index < lines.length && !isTimeLine(lines[index])) {
        title = capitalizeScheduleTitle(lines[index].trim())
        index += 1
      }
    }

    const bodyLines: string[] = []
    while (index < lines.length) {
      const trimmed = lines[index].trim()
      if (trimmed && isTimeLine(trimmed)) break

      if (!trimmed) {
        let peek = index + 1
        while (peek < lines.length && !lines[peek].trim()) peek += 1
        if (peek < lines.length && isTimeLine(lines[peek].trim())) {
          bodyLines.push(lines[index])
          index += 1
          continue
        }
        if (peek < lines.length && shouldStartOutro(lines[peek])) {
          index = peek
          break
        }
      }

      bodyLines.push(lines[index])
      index += 1
    }

    items.push({ time, title, body: bodyLines.join('\n').trim() })
  }

  if (items.length < 2) return null

  const outroLines: string[] = []
  while (index < lines.length) {
    outroLines.push(lines[index])
    index += 1
  }

  const intro = introLines.join('\n').trim()
  const outro = outroLines.join('\n').trim()

  return {
    intro: intro || undefined,
    items,
    outro: outro || undefined,
  }
}
