import { HorseBackground } from './HorseBackground'
import LogoSvg from './LogoSvg'
import DateBlockSvg from './DateBlockSvg'
import OgosLogosSvg from './OgosLogosSvg'

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        height: '100vh',
        minHeight: 620,
        background: 'linear-gradient(110.643deg, #BF00FF 7.735%, #E8362D 31.403%, #F18500 60.144%, #FFDF00 92.265%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Horse — right side background */}
      <div
        style={{
          position: 'absolute',
          right: '-4%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '58%',
          height: '105%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <HorseBackground
          fillOpacity={0.22}
          fill="white"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top bar: logo */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: 1280,
          width: '100%',
          margin: '0 auto',
          padding: '116px 48px 0',
          boxSizing: 'border-box',
          flexShrink: 0,
        }}
      >
        <LogoSvg
          variant="light"
          style={{
            height: 'clamp(180px, 24vw, 340px)',
            width: 'auto',
            display: 'block',
          }}
        />
      </div>

      {/* Center content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: 1280,
          width: '100%',
          margin: '0 auto',
          padding: '0 48px',
          boxSizing: 'border-box',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBottom: 'clamp(80px, 10vh, 120px)',
        }}
      >
        {/* Date + venue block */}
        <DateBlockSvg
          style={{
            width: 'clamp(160px, 22vw, 320px)',
            height: 'auto',
            display: 'block',
            marginBottom: 'clamp(20px, 3vh, 36px)',
          }}
        />

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            onClick={() => scrollTo('#about')}
            style={{
              background: '#FFDF00',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 14,
              color: '#000000',
              letterSpacing: '0.04em',
              padding: '14px 32px',
              borderRadius: 8,
              transition: 'transform 0.15s, box-shadow 0.2s',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              const t = e.currentTarget
              t.style.transform = 'translateY(-2px)'
              t.style.boxShadow = '0 8px 28px rgba(0,0,0,0.25)'
            }}
            onMouseLeave={e => {
              const t = e.currentTarget
              t.style.transform = 'translateY(0)'
              t.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'
            }}
          >
            ЗАРЕГИСТРИРОВАТЬСЯ →
          </button>
          <button
            onClick={() => scrollTo('#programs')}
            style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              border: '1.6px solid rgba(255,255,255,0.55)',
              cursor: 'pointer',
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 14,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              padding: '12px 28px',
              borderRadius: 8,
              transition: 'background 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)')}
          >
            ПРОГРАММА
          </button>
        </div>
      </div>

      {/* Bottom: divider + partner logos */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: 1280,
          width: '100%',
          margin: '0 auto',
          padding: '0 48px 24px',
          boxSizing: 'border-box',
          flexShrink: 0,
        }}
      >
        <OgosLogosSvg
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    </section>
  )
}
