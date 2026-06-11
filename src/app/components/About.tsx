const stats = [
  { value: '27 ИЮНЯ', label: 'дата праздника', color: '#E8362D' },
  { value: '100 000+', label: 'участников', color: '#F18500' },
  { value: '8', label: 'направлений', color: '#BF00FF' },
  { value: 'КАЗАНЬ', label: 'экстрим-парк «УРАМ»', color: '#E8362D' },
]

export default function About() {
  return (
    <section
      id="about"
      className="section-pad-lg"
      style={{
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient top border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          background: 'linear-gradient(90deg, #BF00FF, #E8362D, #F18500, #FFDF00)',
        }}
      />

      {/* Watermark "2026" */}
      <div
        style={{
          position: 'absolute',
          right: '-1%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: '"Dela Gothic One", cursive',
          fontSize: 'clamp(160px, 22vw, 320px)',
          color: 'rgba(241,133,0,0.05)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        2026
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.8fr',
            gap: 64,
            alignItems: 'start',
            marginBottom: 80,
          }}
          className="about-grid-top"
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div
                style={{
                  width: 36,
                  height: 4,
                  borderRadius: 2,
                  background: 'linear-gradient(90deg, #E8362D, #F18500)',
                }}
              />
              <span
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 12,
                  color: '#E8362D',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                О СОБЫТИИ
              </span>
            </div>
            <h2
              className="section-display-title about-section-title"
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: 'clamp(38px, 5.5vw, 76px)',
                lineHeight: 1.12,
                color: '#000000',
                margin: 0,
                letterSpacing: 0,
              }}
            >
              ГЛАВНЫЙ
              <br />
              МОЛОДЁЖНЫЙ
              <br />
              <span className="gradient-text-full">
                ПРАЗДНИК
              </span>
            </h2>
          </div>

          <div>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                color: '#333333',
                lineHeight: 1.75,
                margin: '0 0 22px',
              }}
            >
              27 июня 2026 года Казань принимает Всероссийский День молодёжи
              в экстрим-парке «УРАМ».{' '}
              <span style={{ fontWeight: 700, color: '#E8362D' }}>
                Один день — тысячи возможностей.
              </span>{' '}
              Это главный молодёжный праздник страны, который объединяет самых
              активных, смелых и творческих людей России.
            </p>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                color: '#666666',
                lineHeight: 1.7,
                margin: '0 0 16px',
              }}
            >
              8 тематических площадок, звёздные спикеры, соревнования мирового
              уровня, мастер-классы и большой концерт на главной сцене — всё
              это в одном месте, в один незабываемый день.
            </p>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 'clamp(14px, 1.2vw, 16px)',
                color: '#E8362D',
                lineHeight: 1.6,
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              Концепция празднования Дня молодёжи в 2026 году — «Мечта. Гордость. Единство».
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card"
              style={{
                background: '#F5F5F5',
                border: `2px solid ${stat.color}20`,
                borderRadius: 16,
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const t = e.currentTarget as HTMLElement
                t.style.transform = 'translateY(-3px)'
                t.style.boxShadow = `0 8px 28px ${stat.color}22`
              }}
              onMouseLeave={e => {
                const t = e.currentTarget as HTMLElement
                t.style.transform = 'translateY(0)'
                t.style.boxShadow = 'none'
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: stat.color,
                  borderRadius: '14px 14px 0 0',
                }}
              />
              <div
                style={{
                  fontFamily: '"Dela Gothic One", cursive',
                  fontSize: 'clamp(20px, 3vw, 38px)',
                  color: stat.color,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  marginBottom: 10,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 13,
                  color: '#666666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid-top { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
