import ProgramSection from './ProgramSection'

const PLACE = 'Площадка главной сцены'

const stageActivities = [
  {
    id: 1,
    title: 'Выступление молодых локальных артистов на двух языках',
    time: '13:00 – 22:00',
    place: PLACE,
    desc: '',
    img: null,
    partners: null,
    tags: [],
  },
]

export default function StageProgram() {
  return (
    <ProgramSection
      id="stage-program"
      title="ГЛАВНАЯ СЦЕНА"
      titleClassName="gradient-text-full"
      timeRange="13:00 – 22:00"
      activities={stageActivities}
    />
  )
}
