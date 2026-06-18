import type { ReactNode } from 'react'
import { Mic } from 'lucide-react'
import ProgramSection from './ProgramSection'

const PLACE = 'Лекторий экстрим-парка УРАМ'

function eduImg(name: string) {
  return `/images/education/${name}`
}

type Person = {
  name: string
  bio: string
  img?: string
}

function formatBio(bio: string): string {
  const trimmed = bio.trim()
  if (!trimmed) return ''
  const text = trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
  return /[.!?…]$/.test(text) ? text : `${text}.`
}

const avatarStyle = {
  width: 48,
  height: 48,
  borderRadius: '50%',
  border: '2px solid rgba(232,54,45,0.25)',
  flexShrink: 0,
  display: 'block',
} as const

function PersonAvatar({ person }: { person: Person }) {
  if (person.img) {
    return (
      <img
        src={person.img}
        alt={person.name}
        loading="lazy"
        decoding="async"
        style={{
          ...avatarStyle,
          objectFit: 'cover',
          objectPosition: 'center 20%',
        }}
      />
    )
  }

  return (
    <div
      style={{
        ...avatarStyle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(232,54,45,0.08)',
      }}
      aria-hidden
    >
      <Mic size={20} color="#E8362D" strokeWidth={2} />
    </div>
  )
}

function SpeakerBlock({ title, people }: { title: string; people: Person[] }) {
  return (
    <div style={{ marginTop: 20 }}>
      <div
        style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: 13,
          fontWeight: 700,
          color: '#E8362D',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {people.map(person => (
          <div
            key={person.name}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: 14,
            }}
          >
            <PersonAvatar person={person} />
            <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
              <div
                style={{
                  fontFamily: '"Dela Gothic One", cursive',
                  fontSize: 13,
                  color: '#111111',
                  lineHeight: 1.25,
                  marginBottom: person.bio ? 4 : 0,
                }}
              >
                {person.name}
              </div>
              {person.bio ? (
                <div
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 13,
                    color: '#555555',
                    lineHeight: 1.5,
                  }}
                >
                  {formatBio(person.bio)}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function eventDesc(intro: string, blocks: { title: string; people: Person[] }[]): ReactNode {
  return (
    <>
      <p style={{ margin: '0 0 4px', whiteSpace: 'pre-wrap' }}>{intro}</p>
      {blocks.map(block => (
        <SpeakerBlock key={block.title} title={block.title} people={block.people} />
      ))}
    </>
  )
}

const educationActivities = [
  {
    id: 1,
    title: 'Дискуссия о здоровье «Комплекс полноценности: главные правила женского здоровья?»',
    time: '13:00',
    place: PLACE,
    desc: eventDesc(
      `Вместо бесконечной «починки» себя и поиска недостатков спикеры поговорят о целостности. На дискуссии мы обсудим главные мифы о женском здоровье, научимся отличать навязанные страхи от реальных сигналов тела и построим персональную стратегию заботы о себе.`,
      [
        {
          title: 'Спикеры',
          people: [
            {
              name: 'Лера Вейв',
              bio: 'Психолог, блогер, ментор-мотиватор.',
              img: eduImg('lera-veiv.jpg'),
            },
            {
              name: 'Ясмин Буали',
              bio: 'Врач-гинеколог и медицинский блогер, создаёт научно-популярный контент о женском здоровье в социальных сетях.',
              img: eduImg('yasmin-buali.jpg'),
            },
            {
              name: 'Алсу Рахимова',
              bio: 'Врач онколог-маммолог, член POOM.RUSSCO.AOP.',
              img: eduImg('alsu-rakhimova.jpg'),
            },
          ],
        },
        {
          title: 'Модератор',
          people: [
            {
              name: 'Анастасия Ивашкевич',
              bio: 'Продюсер специальных проектов арт-резиденции РЕАКТОР, клинический психолог, лектор, диджей.',
              img: eduImg('anastasia-ivashkevich.jpg'),
            },
          ],
        },
      ]
    ),
    img: null,
    partners: null,
    tags: ['Здоровье', 'Психология', 'Для женщин'],
  },
  {
    id: 2,
    title: 'Открытый разговор «От «вау!» до «беру!»: анатомия работающего маркетинга в бизнесе»',
    time: '14:10',
    place: PLACE,
    desc: eventDesc(
      `Как превратить мимолетный интерес аудитории в реальную покупку? На лекции мы разберем «скелет» успешной маркетинговой стратегии: от создания цепляющего оффера до выстраивания доверия и закрытия сделки. Вы узнаете, какие психологические триггеры работают сегодня, как избежать слива бюджета и создать систему, которая стабильно генерирует продажи.`,
      [
        {
          title: 'Спикер',
          people: [
            {
              name: 'Дмитрий Яковлев',
              bio: 'Эксперт по креативному маркетингу для бизнеса. Клиенты: ДоДо, Брусника, Золотое яблоко, 2 ГИС.',
              img: eduImg('dmitry-yakovlev.jpg'),
            },
          ],
        },
        {
          title: 'Модератор',
          people: [{ name: 'Михаил Ванюшин', bio: '' }],
        },
      ]
    ),
    img: null,
    partners: null,
    tags: ['Маркетинг', 'Бизнес', 'Креатив'],
  },
  {
    id: 3,
    title: 'Открытый разговор «AI как новый инструмент визуального искусства»',
    time: '15:20',
    place: PLACE,
    desc: eventDesc(
      `Как AI сегодня стал полноценным художественным медиумом, через который молодые авторы и творческие единицы креативной индустрии создают проекты. Как AI меняет визуальную культуру? AI перестал быть просто техническим инструментом. Особенно это заметно у молодых авторов, которые работают быстро, гибко и визуально точно.`,
      [
        {
          title: 'Спикер',
          people: [
            {
              name: 'Лиза Ливада',
              bio: 'Художница, работающая в поле новых медиа, генеративного ИИ-искусства и графического дизайна. Основательница международной образовательной платформы Livada School.',
              img: eduImg('liza-livada.jpg'),
            },
          ],
        },
        {
          title: 'Модератор и спикер',
          people: [
            {
              name: 'Мария Квад',
              bio: 'Куратор и арт-менеджер.',
              img: eduImg('maria-kvad.jpg'),
            },
          ],
        },
      ]
    ),
    img: null,
    partners: null,
    tags: ['Квест', 'Навыки', 'Мерч'],
  },
  {
    id: 4,
    title: 'Открытый разговор «Суета в родильном отделении и другие хроники астраханской фермы»',
    time: '17:40',
    place: PLACE,
    desc: eventDesc(
      `Открытый разговор с Тимуром Далгатовым: фермером с 4300 га земли, амбассадором модного дома Ushatava, победителем рейтинга Forbes «30 до 30» и блогером с аудиторией 2 млн человек.
Поговорим о том, как он пришел к своему делу, почему развитие ремесла и жизнь на земле – это новый «люкс» и главный тренд, и почему людям сегодня так не хватает простого, доброго и искреннего контента. Тимур честно расскажет о своем пути к тому, чем он занимается сейчас.`,
      [
        {
          title: 'Спикер',
          people: [
            {
              name: 'Тимур Далгатов',
              bio: 'Фермер, блогер-миллионник, амбассадор Ushatava, Forbes «30 до 30».',
              img: eduImg('timur-dalgatov.jpg'),
            },
          ],
        },
        {
          title: 'Модератор',
          people: [{ name: 'Михаил Ванюшин', bio: '' }],
        },
      ]
    ),
    img: null,
    partners: null,
    tags: ['Фермерство', 'Свое дело', 'Блогерство'],
  },
  {
    id: 5,
    title: 'Открытый разговор «Как играть в жизнь и выигрывать: лекция о пользе контролируемого дурачества»',
    time: '19:00',
    place: PLACE,
    desc: eventDesc(
      `Излишняя серьезность часто становится главным врагом креативности и счастья. Эта лекция – приглашение снять корону и разрешить себе экспериментировать. Мы обсудим, как «контролируемое дурачество» помогает выходить из тупиков, снижать уровень выгорания и находить нестандартные решения в бизнесе и личной жизни.`,
      [
        {
          title: 'Спикер',
          people: [
            {
              name: 'Сергей Мезенцев',
              bio: 'Комик, блогер, режиссёр, музыкант и подкастер, ведёт шоу «Сережа и микрофон».',
              img: eduImg('sergey-mezentsev.jpg'),
            },
          ],
        },
        {
          title: 'Модератор',
          people: [{ name: 'Михаил Ванюшин', bio: '' }],
        },
      ]
    ),
    img: null,
    partners: null,
    tags: ['Навыки', 'О жизни'],
  },
]

export default function EducationProgram() {
  return (
    <ProgramSection
      id="education-program"
      title="ОБРАЗОВАНИЕ"
      titleClassName="gradient-text-full"
      timeRange="13:00 – 20:00"
      activities={educationActivities}
      expandedMaxHeight={3200}
    />
  )
}
