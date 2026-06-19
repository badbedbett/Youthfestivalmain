import ProgramSection from './ProgramSection'

const PLACE = 'Площадка главной сцены'

const stageActivities = [
  {
    id: 1,
    title: 'Выступление молодых локальных артистов на двух языках',
    time: '13:00 – 22:00',
    place: PLACE,
    desc: `Список выступающих артистов концертной программы совсем скоро дополнится!

Хедлайнером Дня молодёжи станет L'One, выступление в 21:00.`,
    img: '/images/stage/headliner.png',
    imgLayout: 'below' as const,
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
