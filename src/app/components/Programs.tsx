import { useState } from 'react'

function programCardImg(name: string): string {
  return `/images/programs/${name}.png`
}

const programSectionIds: Record<number, string> = {
  1: 'sport-program',
  2: 'patriot-program',
  3: 'career-program',
  4: 'health-program',
  5: 'education-program',
  6: 'stage-program',
  7: 'interactive-program',
  8: 'partners-program',
}

const programs = [
  {
    id: 1,
    title: 'Спорт',
    time: '10:00 – 20:00',
    desc: 'ВМХ, самокат, воркаут, паркур, ролики, баскетбол 3×3, джиу-джитсу и другие дисциплины.',
    color: '#E8362D',
    img: programCardImg('sport'),
  },
  {
    id: 2,
    title: 'Патриотика',
    time: '10:00 – 19:00',
    desc: 'Полоса препятствий, трасса полётов для FPV, зона тактической стрельбы.',
    color: '#F18500',
    img: programCardImg('patriot'),
  },
  {
    id: 3,
    title: 'Карьера',
    time: '10:00 – 20:00',
    desc: 'Ярмарка трудоустройства, зоны собеседований, индустриальный показ моды, карьерные консультации.',
    color: '#FFDF00',
    img: programCardImg('career'),
  },
  {
    id: 4,
    title: 'Здоровье',
    time: '12:00 – 19:00',
    desc: 'Комплексная проверка здоровья, экспресс-тестирование на ВИЧ, короткие свидания с врачами.',
    color: '#BF00FF',
    img: programCardImg('health'),
  },
  {
    id: 5,
    title: 'Образование',
    time: '13:00 – 20:00',
    desc: 'Образовательные и просветительские лекции, мотивационные встречи.',
    color: '#BF00FF',
    img: programCardImg('education'),
  },
  {
    id: 6,
    title: 'Главная сцена',
    time: '13:00 – 22:00',
    desc: 'Выступление местных артистов, показательные шоу и главные хэдлайнеры события.',
    color: '#E8362D',
    img: programCardImg('stage'),
  },
  {
    id: 7,
    title: 'Интерактивные площадки',
    time: '10:00 – 22:00',
    desc: 'VR-зоны, квесты, творческие мастерские, арт-объекты.',
    color: '#F18500',
    img: programCardImg('interactive'),
  },
  {
    id: 8,
    title: 'Партнёрские площадки',
    time: '10:00 – 20:00',
    desc: 'Пространства от ведущих партнёров: активности, розыгрыши, эксклюзив.',
    color: '#FFDF00',
    img: programCardImg('partners'),
  },
]

export default function Programs() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section
      id="programs"
      className="section-pad-lg"
      style={{
        background: '#F5F5F5',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          background: 'linear-gradient(90deg, #FFDF00, #F18500, #E8362D, #BF00FF)',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 36,
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #F18500, #FFDF00)',
              }}
            />
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 12,
                color: '#F18500',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              8 направлений
            </span>
          </div>
          <h2
            className="section-display-title"
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(36px, 5vw, 72px)',
              lineHeight: 1.05,
              color: '#000000',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            ПРОГРАММА
            <br />
            <span className="gradient-text-full">ПРАЗДНИКА</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
          className="programs-grid"
        >
          {programs.map(p => (
            <div
              key={p.id}
              className="program-card"
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: '#FFFFFF',
                borderRadius: 18,
                overflow: 'hidden',
                boxShadow: hoveredId === p.id
                  ? `0 20px 48px rgba(0,0,0,0.14), 0 0 0 2px ${p.color}`
                  : '0 4px 20px rgba(0,0,0,0.07)',
                transition: 'transform 0.25s, box-shadow 0.25s',
                transform: hoveredId === p.id ? 'scale(1.03) translateY(-4px)' : 'scale(1)',
              }}
            >
              <div style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                <div
                  aria-hidden
                  style={{
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, ${p.color}88 0%, ${p.color}22 55%, #f5f5f5 100%)`,
                  }}
                />
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                  }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s',
                    transform: hoveredId === p.id ? 'scale(1.07)' : 'scale(1)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(60,60,60,0.12) 0%, rgba(45,45,45,0.5) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: 5,
                    background: p.color,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    background: p.color,
                    borderRadius: 100,
                    padding: '4px 12px',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 11,
                    color: p.color === '#FFDF00' ? '#000000' : '#FFFFFF',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                  }}
                >
                  {p.time}
                </div>
              </div>

              <div className="program-card-body" style={{ padding: '18px 20px 24px' }}>
                <h3
                  className="program-card-title"
                  style={{
                    fontFamily: '"Dela Gothic One", cursive',
                    fontSize: 17,
                    color: '#000000',
                    margin: '0 0 8px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="program-card-desc"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 13,
                    color: '#333333',
                    lineHeight: 1.6,
                    margin: '0 0 16px',
                  }}
                >
                  {p.desc}
                </p>
                <button
                  onClick={() => {
                    const el = document.querySelector(`#${programSectionIds[p.id]}`)
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  style={{
                    background: p.color,
                    border: 'none',
                    borderRadius: 8,
                    padding: '8px 18px',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 12,
                    color: p.color === '#FFDF00' ? '#000000' : '#FFFFFF',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    transition: 'opacity 0.15s',
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >
                  Подробнее →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .programs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .programs-grid { grid-template-columns: 1fr !important; }
        }
        @media (hover: none) {
          .program-card { transform: none !important; }
        }
      `}</style>
    </section>
  )
}
