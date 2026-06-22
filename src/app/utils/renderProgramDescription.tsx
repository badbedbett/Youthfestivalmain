import type { ReactNode } from 'react'
import { linkifyText } from './linkifyText'
import { parseProgramSchedule } from './parseProgramSchedule'

export function renderProgramDescription(desc: string): ReactNode {
  const schedule = parseProgramSchedule(desc)
  if (!schedule) return linkifyText(desc)

  return (
    <div className="program-schedule">
      {schedule.intro && (
        <p className="program-schedule-intro">{linkifyText(schedule.intro)}</p>
      )}
      {schedule.items.map((item, index) => (
        <div key={index} className="program-schedule-item">
          <span className="program-schedule-time">{item.time}</span>
          <div className="program-schedule-content">
            {item.title && <div className="program-schedule-title">{item.title}</div>}
            {item.body && (
              <div
                className={`program-schedule-body${item.title ? '' : ' program-schedule-body--solo'}`}
              >
                {linkifyText(item.body)}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
