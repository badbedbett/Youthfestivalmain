import ProgramSection from './ProgramSection'

export default function InteractiveProgram() {
  return (
    <ProgramSection
      id="interactive-program"
      title="ИНТЕРАКТИВНЫЕ ПЛОЩАДКИ"
      timeRange="12:00 – 22:00"
      activities={[
        {
          id: 1,
          title: 'Программа интерактивных площадок',
          time: '12:00 – 22:00',
          place: 'Экстрим-парк «УРАМ»',
          desc: 'VR-зоны, квесты, творческие мастерские, арт-объекты.\n\nДетальное расписание активностей будет опубликовано дополнительно.',
          img: null,
          partners: null,
          tags: [],
        },
      ]}
    />
  )
}
