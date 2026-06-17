import { HorseBackground } from './HorseBackground'

const speakers = [
  {
    name: 'Ясмин Буали',
    role: 'Врач-гинеколог и медицинский блогер',
    accent: '#E8362D',
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
    accent: '#BF00FF',
    img: '/images/speakers/dmitry-yakovlev.jpg',
    imgPosition: 'center 22%',
    time: '14:10',
    location: 'Лекторий',
    lecture: 'Открытый разговор «От «вау!» до «беру!»: анатомия работающего маркетинга в бизнесе»',
  },
  {
    name: 'Елизавета Ливада',
    role: 'Художница, генеративное ИИ-искусство и графический дизайн',
    accent: null,
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
    name: 'Тимур Далгатов',
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
    accent: '#E8362D',
    img: '/images/speakers/sergey-mezentsev.jpg',
    imgPosition: 'center 18%',
    time: '13:00–18:00 / 19:00',
    location: 'Стритбольные поля / Лекторий',
    lecture: 'Медиатурнир по баскетболу 3х3; открытый разговор «Как играть в жизнь и выигрывать»',
  },
  {
    name: 'Виталий Зуев',
    role: 'Победитель 8 сезона КАРДО ВОРКАУТ STATIC',
    accent: '#FFDF00',
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
    accent: '#FFDF00',
    img: '/images/speakers/dmitry-dvoynishnikov.jpg',
    imgPosition: 'center 20%',
    time: '15:00–20:00',
    location: 'Стрит-плаза',
    lecture: 'Активности от партнёра Билайн',
  },
  {
    name: 'Эмин Алиев',
    role: 'Райдер команды DC Russia, судья Red Bull Manny Mania',
    accent: null,
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
    accent: null,
    img: '/images/speakers/mikhail-okatev.jpg',
    imgPosition: 'center 20%',
    time: '13:30–16:30',
    location: 'Стрит-плаза',
    lecture: 'Соревнования по BMX стрит',
  },
  {
    name: 'Артём Кузнецов',
    role: 'Руководитель спортивного отдела Экстрим-парка «УРАМ»',
    accent: '#E8362D',
    img: '/images/speakers/artem-kuznetsov.jpg',
    imgPosition: 'center 20%',
    time: '15:00–20:00',
    location: 'Стрит-плаза',
    lecture: 'Судья соревнований',
  },
]


export default function Speakers() {
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
        {/* Header */}
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

        {/* Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}
          className="speakers-grid"
        >
          {speakers.map((sp, idx) => {
            const isAccented = sp.accent !== null
            const isDark = sp.accent === '#FFDF00'
            const textColor = isAccented ? (isDark ? '#000000' : '#FFFFFF') : '#FFFFFF'
            const subColor = isAccented ? (isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.75)') : 'rgba(255,255,255,0.65)'
            const accentColor = sp.accent ?? '#FFDF00'
            const backBg = isAccented ? sp.accent! : 'rgba(255,255,255,0.12)'
            const backIsDark = sp.accent === '#FFDF00'
            const backText = isAccented ? (backIsDark ? '#000000' : '#FFFFFF') : '#FFFFFF'
            const backSub = isAccented ? (backIsDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.75)') : 'rgba(255,255,255,0.65)'
            const backDivider = isAccented ? (backIsDark ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.4)') : 'rgba(255,255,255,0.3)'

            return (
              <div
                key={idx}
                className="speaker-flip-container"
                style={{ perspective: '800px', cursor: 'default' }}
              >
                <div className="speaker-flip-inner">
                  {/* FRONT */}
                  <div
                    className="speaker-face speaker-front"
                    style={{
                      background: isAccented ? sp.accent! : 'rgba(255,255,255,0.12)',
                      border: isAccented ? 'none' : '1px solid rgba(255,255,255,0.18)',
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        flexShrink: 0,
                        border: `2px solid ${isAccented ? (isDark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.35)') : 'rgba(255,255,255,0.25)'}`,
                      }}
                    >
                      <img
                        src={sp.img}
                        alt={sp.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: sp.imgPosition ?? 'center 20%',
                          display: 'block',
                        }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: '"Dela Gothic One", cursive',
                          fontSize: 'clamp(11px, 1vw, 13px)',
                          color: textColor,
                          letterSpacing: '-0.01em',
                          lineHeight: 1.2,
                          marginBottom: 3,
                        }}
                      >
                        {sp.name}
                      </div>
                      <div
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: 'clamp(9px, 0.75vw, 11px)',
                          color: subColor,
                          lineHeight: 1.3,
                        }}
                      >
                        {sp.role}
                      </div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="speaker-face speaker-back"
                    style={{
                      background: backBg,
                      border: isAccented ? 'none' : '1px solid rgba(255,255,255,0.18)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: '"Dela Gothic One", cursive',
                        fontSize: 'clamp(16px, 1.4vw, 20px)',
                        color: backText,
                        letterSpacing: '-0.01em',
                        lineHeight: 1,
                        marginBottom: 6,
                      }}
                    >
                      {sp.time}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 'clamp(9px, 0.8vw, 11px)',
                        color: backSub,
                        lineHeight: 1.3,
                        marginBottom: 8,
                      }}
                    >
                      {sp.location}
                    </div>
                    <div
                      style={{
                        width: 24,
                        height: 2,
                        background: backDivider,
                        borderRadius: 1,
                        marginBottom: 8,
                      }}
                    />
                    <div
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 'clamp(9px, 0.8vw, 11px)',
                        color: backText,
                        lineHeight: 1.45,
                        fontStyle: 'italic',
                      }}
                    >
                      {sp.lecture}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .speaker-flip-container {
          height: 155px;
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
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
        }
        .speaker-back {
          transform: rotateY(180deg);
          justify-content: center;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.12);
        }
        @media (max-width: 1100px) {
          .speakers-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 700px) {
          .speakers-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .speaker-flip-container { height: 160px; }
        }
        @media (max-width: 480px) {
          .speakers-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .speaker-flip-container { height: 150px; }
        }
      `}</style>
    </section>
  )
}
