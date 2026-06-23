import { useEffect } from 'react'
import { HorseBackground } from './HorseBackground'
import { preloadSpeakerImages } from '../utils/preloadImages'

type Speaker = {
  name: string
  role: string
  accent: string | null
  img: string
  imgPosition?: string
  time: string
  location: string
  lecture: string
  featured?: boolean
}

const speakers: Speaker[] = [
  {
    name: "L'One",
    role: 'Артист, чьи треки давно стали частью российской хип-хоп- и поп-культуры',
    accent: '#FFDF00',
    featured: true,
    img: '/images/speakers/lone-headliner.jpg',
    imgPosition: 'center 20%',
    time: '10:00 – 22:00',
    location: 'Главная сцена',
    lecture: 'Хедлайнер Дня молодёжи в Казани!',
  },
  {
    name: 'VOROBERIAN',
    role: 'Артист, который живёт на стыке музыки и откровения. Он поёт о телесности и чувствах, о хрупкости современного человека, который учится быть собой, даже если это больно. Каждая песня VOROBERIAN — как исповедь под неоном: интимная, дерзкая, пронзительная',
    accent: null,
    img: '/images/speakers/voroberian.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'Трио «Хыял»',
    role: 'Лауреаты международных, всероссийских и республиканских вокальных конкурсов. А также финалисты и победители в номинации «Сохранение культурного наследия» «Родники.Дети 2026»',
    accent: null,
    img: '/images/speakers/trio-khyal.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'AMIKOband',
    role: 'Кавер-группа из Казани с лёгким танцевальным ретро-поп вайбом с элементами диско и джаза',
    accent: null,
    img: '/images/speakers/amikoband.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'KAMILLUNA',
    role: 'Создаёт вокруг себя альтернативную вселенную вымышленного востока, вдохновляясь фольклором и искусством. В текстах она поднимает актуальные темы, а её музыка впитывает в себя как этнические мотивы, так и футуристическое звучание',
    accent: null,
    img: '/images/speakers/kamilluna.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'Дожди Июля',
    role: 'Инди-рок проект о боли, свободе и жизни, которая продолжается даже во время бурь. Резидент арт-резиденции РЕАКТОР',
    accent: null,
    img: '/images/speakers/dozhdi-iyulya.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'rebless',
    role: 'Резидент арт-резиденции РЕАКТОР, независимый музыкальный проект DIY-артистки Регины Реблесс. Певица создаёт минималистичные синти-поп композиции, объединяя в них хрупкий вокал и откровенные тексты о принятии своей уязвимости',
    accent: null,
    img: '/images/speakers/rebless.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'MARUSYA',
    role: 'Яркий представитель современной музыкальной сцены, сочетающий в своём творчестве инди-поп и соул. Её творчество сочетает в себе мелодичность и глубокие тексты, что позволяет найти отклик у широкой аудитории',
    accent: null,
    img: '/images/speakers/marusya.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'WHOA',
    role: 'Музыкальный артист, создающий экспериментальный хип-хоп на татарском языке, не боящийся дерзить и иронизировать. Его творчество — целая вселенная, в которой нестандартные ритмы, яркий визуальный стиль и смелые решения ломают рамки и цепляют с первых секунд',
    accent: null,
    img: '/images/speakers/whoa.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'OVAK',
    role: 'Артист, который доказывает, что современная поп-музыка может быть стильной, искренней и танцевальной. Его треки объединяют электронное звучание, ностальгические мотивы и живые эмоции. «Медиа о блогерах SRSLY» назвало его одним из главных открытий российской сцены',
    accent: null,
    img: '/images/speakers/ovak.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'MIDIN',
    role: 'Музыкант из Уфы. Его музыка — гармоничное сочетание современного звука и ностальгических мотивов десятилетий, где синтезаторы переплетаются с живыми инструментами. В композициях MIDIN передаёт оттенки любви, страсти и переживаний',
    accent: null,
    img: '/images/speakers/midin.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'хопелес',
    role: 'Музыка хопелес — это мир меланхоличного инди-попа. Простые слова передают сложные чувства, знакомые каждому. А пронзительные мелодии находят отклик в сердцах. Главные ценности хопелес — искренность, честность и поиск места в жизни',
    accent: null,
    img: '/images/speakers/hopeles.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'Майлз',
    role: 'Хип-хоп артист из Бишкека. Его музыка многогранна, как и его видение. Поэтому он не боится смешивать звучания и пробовать себя в направлениях рэпа — от старой до новой школы. Хип-хоп для него не просто жанр, а целая культура. Философия в строках раскрывает его как человека, рифмовка и флоу усиливают образ',
    accent: null,
    img: '/images/speakers/mayls.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'Майкрайз',
    role: 'Саунд-продюсер, превращающий городскую суету в музыку! Звучание, где есть место грусти многоэтажек и светлой улыбке, напоминающей: в любой истории можно найти добрый угол',
    accent: null,
    img: '/images/speakers/maikryz.jpg',
    imgPosition: 'center 20%',
    time: '13:00–22:00',
    location: 'Главная сцена',
    lecture: 'Артист',
  },
  {
    name: 'Ясмин Буали',
    role: 'Врач-гинеколог и медицинский блогер',
    accent: '#BF00FF',
    img: '/images/speakers/yasmin-buali.jpg',
    imgPosition: 'center 18%',
    time: '13:00',
    location: 'Лекторий',
    lecture: 'Дискуссия о здоровье «Комплекс полноценности: главные правила женского здоровья?»',
  },
  {
    name: 'Лера Вейв',
    role: 'Психолог, блогер, ментор-мотиватор',
    accent: null,
    img: '/images/speakers/lera-veiv.jpg',
    imgPosition: 'center 20%',
    time: '13:00',
    location: 'Лекторий',
    lecture: 'Дискуссия о здоровье «Комплекс полноценности: главные правила женского здоровья?»',
  },
  {
    name: 'Дмитрий Яковлев',
    role: 'Эксперт по креативному маркетингу для бизнеса',
    accent: null,
    img: '/images/speakers/dmitry-yakovlev.jpg',
    imgPosition: 'center 22%',
    time: '14:10',
    location: 'Лекторий',
    lecture: 'Открытый разговор «От «вау!» до «беру!»: анатомия работающего маркетинга в бизнесе»',
  },
  {
    name: 'Елизавета Ливада',
    role: 'Художница, генеративное ИИ-искусство и графический дизайн',
    accent: '#FFDF00',
    img: '/images/speakers/liza-livada.jpg',
    imgPosition: 'center 20%',
    time: '15:20',
    location: 'Лекторий',
    lecture: 'Открытый разговор «AI как новый инструмент визуального искусства»',
  },
  {
    name: 'Мария Квад',
    role: 'Куратор и арт-менеджер',
    accent: null,
    img: '/images/speakers/maria-kvad.jpg',
    imgPosition: 'center 22%',
    time: '15:20',
    location: 'Лекторий',
    lecture: 'Открытый разговор «AI как новый инструмент визуального искусства»',
  },
  {
    name: 'Тима Фермер',
    role: 'Предприниматель, фермер, блогер-миллионник',
    accent: '#F18500',
    img: '/images/speakers/tima-fermer.jpg',
    imgPosition: 'center 20%',
    time: '17:40',
    location: 'Лекторий',
    lecture: 'Открытый разговор «Суета в родильном отделении и другие хроники астраханской фермы»',
  },
  {
    name: 'Сергей Мезенцев',
    role: 'Комик, блогер, режиссёр, ведёт шоу «Сережа и микрофон»',
    accent: '#FFDF00',
    img: '/images/speakers/sergey-mezentsev.jpg',
    imgPosition: 'center 18%',
    time: '13:00–18:00 / 19:00',
    location: 'Стритбольные поля / Лекторий',
    lecture: 'Медиатурнир по баскетболу 3х3; открытый разговор «Как играть в жизнь и выигрывать»',
  },
  {
    name: 'Виталий Зуев',
    role: 'Победитель 8 сезона КАРДО ВОРКАУТ STATIC',
    accent: null,
    img: '/images/speakers/vitaly-zuev.jpg',
    imgPosition: 'center 20%',
    time: '12:00–19:00',
    location: 'Воркаут',
    lecture: 'Соревнования и мастер-классы по воркауту',
  },
  {
    name: 'Артём Анисимов',
    role: 'Председатель Регионального отделения «Российской федерации паркура» по РТ',
    accent: null,
    img: '/images/speakers/artem-anisimov.jpg',
    imgPosition: 'center 20%',
    time: '12:00–19:00',
    location: 'Паркур',
    lecture: 'Соревнования и мастер-класс по паркуру',
  },
  {
    name: 'Григорий Анфилофеев',
    role: 'Паркур-блогер, чемпион КАРДО 2025',
    accent: null,
    img: '/images/speakers/grigory-anfilofeev.jpg',
    imgPosition: '72% 18%',
    time: '12:00–19:00',
    location: 'Паркур',
    lecture: 'Соревнования и мастер-класс по паркуру',
  },
  {
    name: 'Дмитрий Двойнишников',
    role: 'Член сборной России по скейтбордингу, райдер DC shoes',
    accent: null,
    img: '/images/speakers/dmitry-dvoynishnikov.jpg',
    imgPosition: 'center 20%',
    time: '15:00–20:00',
    location: 'Стрит-плаза',
    lecture: 'Активности от партнёра Билайн',
  },
  {
    name: 'Эмин Алиев',
    role: 'Райдер команды DC Russia, судья Red Bull Manny Mania',
    accent: '#E8362D',
    img: '/images/speakers/emin-aliev.jpg',
    imgPosition: 'center 22%',
    time: '15:00–20:00',
    location: 'Стрит-плаза',
    lecture: 'Активности от партнёра Билайн',
  },
  {
    name: 'Никита Сех',
    role: 'Ведущий фестивалей и Grand Skate Tour',
    accent: '#F18500',
    img: '/images/speakers/nikita-sekh.jpg',
    imgPosition: 'center 20%',
    time: '12:00–18:00 / 18:00–20:00',
    location: 'Эйр-парк / Стрит-плаза',
    lecture: 'Ведущий соревнований',
  },
  {
    name: 'Павел Елсуков',
    role: 'Создатель экстрим-парков, тренер по BMX',
    accent: null,
    img: '/images/speakers/pavel-elsukov.jpg',
    imgPosition: 'center 22%',
    time: '13:30–16:30',
    location: 'Стрит-плаза',
    lecture: 'Ведущий соревнований',
  },
  {
    name: 'Михаил Окатьев',
    role: 'Член сборной РТ по BMX-фристайл',
    accent: '#BF00FF',
    img: '/images/speakers/mikhail-okatev.jpg',
    imgPosition: 'center 20%',
    time: '13:30–16:30',
    location: 'Стрит-плаза',
    lecture: 'Соревнования по BMX стрит',
  },
  {
    name: 'Матвей Шарыгин',
    role: 'Один из ведущих российских BMX-райдеров, финалист WINTERING BMX BATTLE 4 сезон',
    accent: null,
    img: '/images/speakers/matvey-sharygin.jpg',
    imgPosition: 'center 18%',
    time: '13:30–16:30',
    location: 'Стрит-плаза',
    lecture: 'Соревнования по BMX стрит',
  },
  {
    name: 'Андрей Скворцов',
    role: 'Профессиональный райдер, победитель Roller Weekends 2026, Almaty Urban Fest 2023, призер Grand skate tour 2025, Best trick contest 2022 в Испании',
    accent: null,
    img: '/images/speakers/andrey-skvortsov.jpg',
    imgPosition: 'center 22%',
    time: '15:00–18:00',
    location: 'Боул',
    lecture: 'Соревнования по роликам',
  },
  {
    name: 'Артём Кузнецов',
    role: 'Руководитель спортивного отдела Экстрим-парка «УРАМ»',
    accent: null,
    img: '/images/speakers/artem-kuznetsov.jpg',
    imgPosition: 'center 20%',
    time: '15:00–20:00',
    location: 'Стрит-плаза',
    lecture: 'Судья соревнований',
  },
  {
    name: 'Артём Агарков',
    role: 'Чемпион России по BMX в дисциплине стрит, призёр Чемпионата России по BMX в дисциплине парк',
    accent: null,
    img: '/images/speakers/artem-agarkov.jpg',
    imgPosition: 'center 20%',
    time: '10:00–18:00',
    location: 'Эйр-парк',
    lecture: 'Судья в интерактивной зоне СберСпота',
  },
  {
    name: 'Григорий Усенко',
    role: 'Призёр Кубков мира по агрессивным роликам по версии FISE World, один из наиболее известных российских спортсменов в дисциплине Aggressive Inline Park',
    accent: null,
    img: '/images/speakers/grigory-usenko.jpg',
    imgPosition: 'center 20%',
    time: '10:00–18:00',
    location: 'Эйр-парк',
    lecture: 'Судья в интерактивной зоне СберСпота',
  },
  {
    name: 'Влад Самокатчик',
    role: 'Один из наиболее узнаваемых райдеров российской самокатной сцены, автор YouTube-канала «Влад Самокатчик» — 16+ млн подписчиков',
    accent: null,
    img: '/images/speakers/vlad-samokatchik.jpg',
    imgPosition: 'center 20%',
    time: '10:00–18:00',
    location: 'Эйр-парк',
    lecture: 'Судья в интерактивной зоне СберСпота',
  },
]

function SpeakerCard({ sp }: { sp: Speaker }) {
  const isFeatured = sp.featured === true
  const isAccented = sp.accent !== null
  const isDark = sp.accent === '#FFDF00'
  const textColor = isAccented ? (isDark ? '#000000' : '#FFFFFF') : '#FFFFFF'
  const subColor = isAccented ? (isDark ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.75)') : 'rgba(255,255,255,0.65)'
  const backBg = isAccented ? sp.accent! : 'rgba(255,255,255,0.12)'
  const backIsDark = sp.accent === '#FFDF00'
  const backText = isAccented ? (backIsDark ? '#000000' : '#FFFFFF') : '#FFFFFF'
  const backSub = isAccented ? (backIsDark ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.75)') : 'rgba(255,255,255,0.65)'
  const backDivider = isAccented ? (backIsDark ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.4)') : 'rgba(255,255,255,0.3)'
  const avatarSize = isFeatured ? 88 : 52

  return (
    <div
      className={`speaker-flip-container${isFeatured ? ' speaker-featured' : ''}`}
      style={{ perspective: '800px', cursor: 'default' }}
    >
      <div className="speaker-flip-inner">
        <div
          className="speaker-face speaker-front"
          style={{
            background: isFeatured
              ? 'linear-gradient(145deg, #FFFFFF 0%, #FFDF00 100%)'
              : isAccented
                ? sp.accent!
                : 'rgba(255,255,255,0.12)',
            border: isFeatured
              ? '2px solid rgba(255,255,255,0.85)'
              : isAccented
                ? 'none'
                : '1px solid rgba(255,255,255,0.18)',
            boxShadow: isFeatured ? '0 16px 40px rgba(0,0,0,0.18)' : undefined,
          }}
        >
          {isFeatured && (
            <span className="speaker-featured-badge">Хедлайнер</span>
          )}
          <div
            style={{
              width: avatarSize,
              height: avatarSize,
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
              border: `2px solid ${isFeatured ? 'rgba(0,0,0,0.12)' : isAccented ? (isDark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.35)') : 'rgba(255,255,255,0.25)'}`,
            }}
          >
            <img
              src={sp.img}
              alt={sp.name}
              loading={isFeatured ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={isFeatured ? 'high' : 'auto'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: sp.imgPosition ?? 'center 20%',
                display: 'block',
              }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            {isFeatured && (
              <div className="speaker-featured-eyebrow">Главная сцена</div>
            )}
            <div
              className={isFeatured ? 'speaker-featured-name' : undefined}
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: isFeatured ? undefined : 'clamp(11px, 1vw, 13px)',
                color: textColor,
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
                marginBottom: 3,
              }}
            >
              {sp.name}
            </div>
            <div
              className={`speaker-role${isFeatured ? ' speaker-featured-role' : ''}`}
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: isFeatured ? undefined : 'clamp(8px, 0.7vw, 10px)',
                color: subColor,
                lineHeight: 1.35,
              }}
            >
              {sp.role}
            </div>
          </div>
        </div>

        <div
          className="speaker-face speaker-back"
          style={{
            background: backBg,
            border: isAccented ? 'none' : '1px solid rgba(255,255,255,0.18)',
          }}
        >
          <div
            className={isFeatured ? 'speaker-featured-time' : undefined}
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: isFeatured ? undefined : 'clamp(16px, 1.4vw, 20px)',
              color: backText,
              letterSpacing: '-0.01em',
              lineHeight: 1,
              marginBottom: 6,
            }}
          >
            {sp.time}
          </div>
          <div
            className={isFeatured ? 'speaker-featured-location' : undefined}
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: isFeatured ? undefined : 'clamp(9px, 0.8vw, 11px)',
              color: backSub,
              lineHeight: 1.3,
              marginBottom: 8,
            }}
          >
            {sp.location}
          </div>
          <div
            style={{
              width: isFeatured ? 40 : 24,
              height: 2,
              background: backDivider,
              borderRadius: 1,
              marginBottom: 8,
            }}
          />
          <div
            className={isFeatured ? 'speaker-featured-lecture' : undefined}
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: isFeatured ? undefined : 'clamp(9px, 0.8vw, 11px)',
              color: backText,
              lineHeight: 1.45,
              fontStyle: isFeatured ? 'normal' : 'italic',
              fontWeight: isFeatured ? 600 : 400,
            }}
          >
            {sp.lecture}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Speakers() {
  useEffect(() => {
    preloadSpeakerImages()
  }, [])

  return (
    <section
      id="speakers"
      className="section-pad"
      style={{
        background: 'linear-gradient(105deg, #BF00FF 0%, #E8362D 28%, #F18500 62%, #FFDF00 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-6%',
          bottom: '-8%',
          width: '48%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.09,
          zIndex: 1,
        }}
      >
        <HorseBackground fillOpacity={1} fill="white" style={{ width: '100%', height: '100%' }} />
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 36, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.5)' }} />
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 12,
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              27 июня · Казань
            </span>
          </div>
          <h2
            className="section-display-title"
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(32px, 5vw, 68px)',
              lineHeight: 1.05,
              color: '#FFDF00',
              margin: '0 0 12px',
              letterSpacing: '-0.02em',
            }}
          >
            ВЫСТУПЛЕНИЯ,
            <br />
            <span style={{ color: '#FFFFFF' }}>КОТОРЫМИ БУДУТ ДЕЛИТЬСЯ</span>
          </h2>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}
          className="speakers-grid"
        >
          {speakers.map((sp) => (
            <SpeakerCard key={sp.name} sp={sp} />
          ))}
        </div>
      </div>

      <style>{`
        .speaker-flip-container {
          height: 228px;
        }
        .speaker-featured {
          grid-column: span 2;
          grid-row: span 2;
          min-height: calc(228px * 2 + 10px);
          height: auto;
        }
        .speaker-featured .speaker-front {
          gap: 14px;
          padding: 20px 18px;
        }
        .speaker-featured-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000000;
          background: rgba(255,255,255,0.72);
          border-radius: 999px;
          padding: 5px 10px;
        }
        .speaker-featured-eyebrow {
          font-family: "Inter", sans-serif;
          font-size: clamp(10px, 0.9vw, 12px);
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.55);
          margin-bottom: 6px;
        }
        .speaker-featured-name {
          font-size: clamp(22px, 2.4vw, 34px);
          margin-bottom: 8px;
        }
        .speaker-featured-role {
          font-size: clamp(12px, 1.1vw, 15px);
          line-height: 1.45;
        }
        .speaker-featured-time {
          font-size: clamp(28px, 2.8vw, 40px);
        }
        .speaker-featured-location {
          font-size: clamp(12px, 1.1vw, 15px);
        }
        .speaker-featured-lecture {
          font-size: clamp(12px, 1.1vw, 15px);
        }
        .speaker-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .speaker-flip-container:hover .speaker-flip-inner {
          transform: rotateY(180deg);
        }
        .speaker-face {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .speaker-front {
          overflow: hidden;
        }
        .speaker-back {
          transform: rotateY(180deg);
          justify-content: center;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.12);
          overflow: hidden;
        }
        @media (max-width: 1100px) {
          .speakers-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .speaker-flip-container { height: 212px; }
          .speaker-featured { min-height: calc(212px * 2 + 10px); }
        }
        @media (max-width: 700px) {
          .speakers-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .speaker-featured {
            grid-column: span 2;
            grid-row: span 2;
          }
        }
        @media (max-width: 480px) {
          .speakers-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .speaker-flip-container { height: 240px; }
          .speaker-featured {
            grid-column: span 2;
            grid-row: span 2;
            min-height: calc(240px * 2 + 10px);
          }
          .speaker-featured-name {
            font-size: clamp(20px, 7vw, 28px);
          }
        }
      `}</style>
    </section>
  )
}
