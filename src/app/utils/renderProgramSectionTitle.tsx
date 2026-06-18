import { splitProgramTitle } from './measureProgramTitleFontSize'

export function renderProgramSectionTitle(title: string, className: string) {
  const { line1, line2 } = splitProgramTitle(title)

  if (!line2) {
    return <span className={className}>{line1}</span>
  }

  return (
    <span className={className}>
      {line1}
      <br />
      {line2}
    </span>
  )
}
