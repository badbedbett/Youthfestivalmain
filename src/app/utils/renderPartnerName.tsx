import type { ReactNode } from 'react'

const tatarLetterStyle = {
  fontFamily: '"Inter", sans-serif',
  fontSize: '1em',
  fontWeight: 900,
  letterSpacing: '0.01em',
} as const

export function renderPartnerName(name: string): ReactNode {
  if (!name.includes('Ә')) return name

  const parts = name.split('Ә')
  return parts.flatMap((part, index) => {
    if (index === parts.length - 1) return [part]
    return [
      part,
      <span key={`tatar-${index}`} className="partner-tatar-letter" style={tatarLetterStyle}>
        Ә
      </span>,
    ]
  })
}
