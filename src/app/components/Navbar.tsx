import { useState, useEffect } from 'react'
import LogoSvg from './LogoSvg'
import { REGISTRATION_URL } from '../constants/registration'

type NavLink = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const programSections: { label: string; href: string }[] = [
  { label: 'Спорт', href: '#sport-program' },
  { label: 'Патриотика', href: '#patriot-program' },
  { label: 'Карьера', href: '#career-program' },
  { label: 'Здоровье', href: '#health-program' },
  { label: 'Образование', href: '#education-program' },
  { label: 'Главная сцена', href: '#stage-program' },
  { label: 'Интерактивные площадки', href: '#interactive-program' },
  { label: 'Партнёрские площадки', href: '#partners-program' },
]

const links: NavLink[] = [
  { label: 'О событии', href: '#about' },
  { label: 'Программа', href: '#programs', children: programSections },
  { label: 'Люди фестиваля', href: '#speakers' },
  { label: 'Вопросы', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    setMobileExpanded(null)
    setOpenDropdown(null)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const textColor = scrolled ? '#000000' : '#FFFFFF'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(232,54,45,0.1)' : 'none',
      }}
    >
      <div
        className="nav-inner"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
          aria-label="На главную"
        >
          <LogoSvg
            variant={scrolled ? 'dark' : 'light'}
            style={{
              height: 44,
              width: 'auto',
              display: 'block',
              transition: 'opacity 0.3s',
            }}
          />
        </button>

        {/* Desktop Links */}
        <div
          style={{ display: 'flex', gap: 36, alignItems: 'center' }}
          className="hidden-mobile"
        >
          {links.map(link => {
            const isDropdownOpen = openDropdown === link.href

            return (
              <div
                key={link.href}
                style={{ position: 'relative' }}
                onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                onMouseLeave={() => link.children && setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 14,
                    fontWeight: 500,
                    color: scrolled ? 'rgba(26,10,0,0.7)' : 'rgba(255,255,255,0.85)',
                    letterSpacing: '0.02em',
                    transition: 'color 0.2s',
                    padding: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.color = scrolled ? '#E8362D' : '#FFDF00'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.color = scrolled
                      ? 'rgba(26,10,0,0.7)'
                      : 'rgba(255,255,255,0.85)'
                  }}
                >
                  {link.label}
                  {link.children && (
                    <span
                      style={{
                        display: 'inline-block',
                        transition: 'transform 0.2s',
                        transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        fontSize: 9,
                        lineHeight: 1,
                      }}
                      aria-hidden
                    >
                      ▼
                    </span>
                  )}
                </button>

                {link.children && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      paddingTop: 14,
                      opacity: isDropdownOpen ? 1 : 0,
                      visibility: isDropdownOpen ? 'visible' : 'hidden',
                      transition: 'opacity 0.2s',
                      pointerEvents: isDropdownOpen ? 'auto' : 'none',
                    }}
                  >
                    <div
                      style={{
                        background: '#FFFFFF',
                        borderRadius: 12,
                        boxShadow: '0 12px 32px rgba(0,0,0,0.14)',
                        border: '1px solid rgba(232,54,45,0.1)',
                        padding: 8,
                        minWidth: 230,
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {link.children.map(child => (
                        <button
                          key={child.href}
                          onClick={() => handleNavClick(child.href)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: '"Inter", sans-serif',
                            fontSize: 14,
                            fontWeight: 500,
                            color: 'rgba(26,10,0,0.75)',
                            textAlign: 'left',
                            padding: '10px 14px',
                            borderRadius: 8,
                            transition: 'background 0.15s, color 0.15s',
                            whiteSpace: 'nowrap',
                          }}
                          onMouseEnter={e => {
                            ;(e.currentTarget as HTMLElement).style.background = 'rgba(232,54,45,0.08)'
                            ;(e.currentTarget as HTMLElement).style.color = '#E8362D'
                          }}
                          onMouseLeave={e => {
                            ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                            ;(e.currentTarget as HTMLElement).style.color = 'rgba(26,10,0,0.75)'
                          }}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#E8362D',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 13,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              padding: '10px 22px',
              borderRadius: 6,
              transition: 'background 0.2s, transform 0.1s',
              textDecoration: 'none',
              display: 'inline-block',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#E8362D')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#E8362D')}
          >
            РЕГИСТРАЦИЯ
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
          }}
          className="show-mobile"
          aria-label="Меню"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: textColor,
                borderRadius: 2,
                transition: 'background 0.3s, transform 0.3s, opacity 0.3s',
                transformOrigin: 'center',
                transform: menuOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(16px)',
            padding: '20px 48px',
            borderTop: '1px solid rgba(232,54,45,0.1)',
            maxHeight: 'calc(100vh - 72px)',
            overflowY: 'auto',
          }}
        >
          {links.map(link => {
            const isExpanded = mobileExpanded === link.href

            if (!link.children) {
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    display: 'block',
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 18,
                    fontWeight: 500,
                    color: '#000000',
                    textAlign: 'left',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(232,54,45,0.08)',
                  }}
                >
                  {link.label}
                </button>
              )
            }

            return (
              <div key={link.href} style={{ borderBottom: '1px solid rgba(232,54,45,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      flex: 1,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 18,
                      fontWeight: 500,
                      color: '#000000',
                      textAlign: 'left',
                      padding: '12px 0',
                    }}
                  >
                    {link.label}
                  </button>
                  <button
                    onClick={() => setMobileExpanded(isExpanded ? null : link.href)}
                    aria-label={isExpanded ? 'Свернуть' : 'Развернуть'}
                    aria-expanded={isExpanded}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '12px 4px 12px 16px',
                      color: '#E8362D',
                      fontSize: 12,
                      lineHeight: 1,
                      transition: 'transform 0.2s',
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    ▼
                  </button>
                </div>

                {isExpanded && (
                  <div style={{ paddingBottom: 8 }}>
                    {link.children.map(child => (
                      <button
                        key={child.href}
                        onClick={() => handleNavClick(child.href)}
                        style={{
                          display: 'block',
                          width: '100%',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: '"Inter", sans-serif',
                          fontSize: 15,
                          fontWeight: 500,
                          color: 'rgba(26,10,0,0.7)',
                          textAlign: 'left',
                          padding: '10px 0 10px 16px',
                        }}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 20,
              background: '#E8362D',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 14,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              padding: '14px 32px',
              borderRadius: 6,
              width: '100%',
              textDecoration: 'none',
              display: 'block',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
