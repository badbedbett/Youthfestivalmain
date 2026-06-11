import { Fragment, type ReactNode } from 'react'

const URL_REGEX = /https?:\/\/[^\s<>,;)\]]+/g

const linkStyle: React.CSSProperties = {
  color: '#E8362D',
  fontWeight: 600,
  textDecoration: 'underline',
  wordBreak: 'break-all',
}

function cleanHref(url: string) {
  return url.replace(/[.,;:!?)]+$/, '')
}

export function linkifyText(text: string): ReactNode {
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  const regex = new RegExp(URL_REGEX)

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    const url = match[0]
    parts.push(
      <a
        key={key++}
        href={cleanHref(url)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link"
        style={linkStyle}
      >
        {url}
      </a>,
    )

    lastIndex = match.index + url.length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  if (parts.length === 0) return text
  if (parts.length === 1) return parts[0]

  return parts.map((part, index) => <Fragment key={index}>{part}</Fragment>)
}
