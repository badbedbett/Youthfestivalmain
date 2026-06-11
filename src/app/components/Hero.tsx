import { HorseBackground } from './HorseBackground'
import LogoSvg from './LogoSvg'
import HeroDateBlock from './HeroDateBlock'
import OgosLogosSvg from './OgosLogosSvg'

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: 'max(100vh, 620px)',
        background: 'linear-gradient(110.643deg, #BF00FF 7.735%, #E8362D 31.403%, #F18500 60.144%, #FFDF00 92.265%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Horse — right side background */}
      <div
        className="hero-horse"
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

      <div className="hero-inner">
        {/* Logo — top, pt 116px in hero.svg */}
        <div className="hero-logo-wrap">
          <LogoSvg
            variant="light"
            className="hero-logo"
            style={{
              height: 'clamp(145px, 16.8vw, 195px)',
              width: 'auto',
              display: 'block',
            }}
          />
        </div>

        {/* Date + CTA — stacked under logo, not vertically centered */}
        <div className="hero-main">
          <HeroDateBlock className="hero-date" />

          <div className="hero-cta">
            <button
              onClick={() => scrollTo('#about')}
              className="hero-btn hero-btn-primary"
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
              className="hero-btn hero-btn-secondary"
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

        {/* Partner logos + divider — bottom strip */}
        <div className="hero-bottom">
          <div className="hero-ogos-wrap">
            <OgosLogosSvg className="hero-ogos hero-ogos--full" />
            <div className="hero-ogos-mobile" aria-hidden="false">
              <OgosLogosSvg variant="mobile-3" className="hero-ogos-row hero-ogos-row--3" />
              <OgosLogosSvg variant="mobile-3b" className="hero-ogos-row hero-ogos-row--3" />
              <OgosLogosSvg variant="mobile-4" className="hero-ogos-row hero-ogos-row--4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
