export type ProgramScheduleItem = {
  time: string
  title?: string
  body: string
}

export type ParsedProgramSchedule = {
  intro?: string
  items: ProgramScheduleItem[]
}

const TIME_LINE =
  /^(\d{1,2}:\d{2}(?:\s*[–—-]\s*\d{1,2}:\d{2})?(?:\s*,\s*\d{1,2}:\d{2}(?:\s*[–—-]\s*\d{1,2}:\d{2})?)*(?:\s*\([^)]+\))?)(?:\s*[–—-]\s*(.+))?$/

function isTimeLine(line: string): boolean {
  return /^\d{1,2}:\d{2}/.test(line.trim())
}

function parseTimeLine(line: string): { time: string; title?: string } {
  const trimmed = line.trim()
  const match = trimmed.match(TIME_LINE)
  if (!match) {
    return { time: trimmed }
  }

  const time = match[1].trim()
  const title = match[2]?.trim()
  return title ? { time, title } : { time }
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

  while (index < lines.length) {
    const line = lines[index].trim()
    if (!line) {
      index += 1
      continue
    }

    if (!isTimeLine(line)) {
      index += 1
      continue
    }

    const { time, title: inlineTitle } = parseTimeLine(line)
    index += 1

    let title = inlineTitle
    if (!title) {
      while (index < lines.length && !lines[index].trim()) index += 1
      if (index < lines.length && !isTimeLine(lines[index])) {
        title = lines[index].trim()
        index += 1
      }
    }

    const bodyLines: string[] = []
    while (index < lines.length) {
      const bodyLine = lines[index]
      if (bodyLine.trim() && isTimeLine(bodyLine)) break
      bodyLines.push(bodyLine)
      index += 1
    }

    const body = bodyLines.join('\n').trim()
    items.push({ time, title, body })
  }

  if (items.length < 2) return null

  const intro = introLines.join('\n').trim()
  return {
    intro: intro || undefined,
    items,
  }
}
