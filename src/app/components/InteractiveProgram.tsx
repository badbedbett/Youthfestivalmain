import ProgramSection from './ProgramSection'
import { interactiveActivities } from '../data/interactiveActivities'

export default function InteractiveProgram() {
  return (
    <ProgramSection
      id="interactive-program"
      title="ИНТЕРАКТИВНЫЕ ПЛОЩАДКИ"
      timeRange="10:00 – 22:00"
      activities={interactiveActivities}
      expandedMaxHeight={5000}
    />
  )
}
