import ProgramSection from './ProgramSection'
import StageLineup from './StageLineup'
import { mainStageArtists } from '../data/mainStageArtists'

const PLACE = 'Площадка главной сцены'

const stageActivities = [
  {
    id: 1,
    title: 'Выступление молодых локальных артистов на двух языках',
    time: '14:00 – 22:00',
    place: PLACE,
    desc: (
      <>
        <p style={{ fontWeight: 700, margin: '0 0 12px', color: '#000000' }}>
          Хедлайнером Дня молодёжи станет L&apos;One!
        </p>
        <p style={{ margin: '0 0 8px' }}>А на главной сцене выступят артисты:</p>
        <StageLineup artists={mainStageArtists} />
      </>
    ),
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
      timeRange="14:00 – 22:00"
      activities={stageActivities}
      expandedMaxHeight={12000}
    />
  )
}
