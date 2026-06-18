import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import ProgramImage from './ProgramImage'
import { preloadImages } from '../utils/preloadImages'
import { linkifyText } from '../utils/linkifyText'
import { renderPartnerName } from '../utils/renderPartnerName'
import {
  scheduleProgramSectionTitleSize,
} from '../utils/measureProgramTitleFontSize'
import { renderProgramSectionTitle } from '../utils/renderProgramSectionTitle'

export type ProgramPartner = string | { name: string; url?: string }

export type ProgramActivity = {
  id: number
  title: string
  time: string
  place: string
  desc: string | ReactNode
  img: string | null
  partners: ProgramPartner[] | null
  tags: string[]
}

type ProgramSectionProps = {
  id: string
  title: string
  titleClassName?: string
  timeRange: string
  location?: ReactNode
  activities: ProgramActivity[]
  expandedMaxHeight?: number
  headerLogo?: string
  headerLogoAlt?: string
}

export default function ProgramSection({
  id,
  title,
  titleClassName = 'gradient-text-warm',
  timeRange,
  location,
  activities,
  expandedMaxHeight = 2000,
  headerLogo,
  headerLogoAlt = '',
}: ProgramSectionProps) {
  const [openId, setOpenId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerBodyRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {
    const titleEl = titleRef.current
    const bodyEl = headerBodyRef.current
    if (!titleEl || !bodyEl) return

    const applyTitleSize = () => {
      scheduleProgramSectionTitleSize(bodyEl)
    }

    const runApply = () => {
      if (document.fonts?.ready) {
        document.fonts.ready.then(applyTitleSize).catch(applyTitleSize)
      } else {
        applyTitleSize()
      }
    }

    runApply()
    window.addEventListener('resize', applyTitleSize)
    return () => window.removeEventListener('resize', applyTitleSize)
  }, [title, timeRange, location, headerLogo])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const urls = activities.map(a => a.img)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          preloadImages(urls)
          observer.disconnect()
        }
      },
      { rootMargin: '500px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [activities])

  return (
    <section
      ref={sectionRef}
      id={id}
      className="section-pad program-section"
      style={{
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 6,
          background: 'linear-gradient(to bottom, #E8362D, #F18500, #FFDF00)',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="sport-header" style={{ marginBottom: 56 }}>
          <div className="sport-header-eyebrow">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
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
                Детальная программа
              </span>
            </div>
          </div>

          <div className="sport-header-body" ref={headerBodyRef}>
            <div className="sport-header-title">
              <h2
                ref={titleRef}
                className="section-display-title sport-header-title-text"
                style={{
                  fontFamily: '"Dela Gothic One", cursive',
                  lineHeight: 1.12,
                  margin: 0,
                  letterSpacing: 0,
                  color: '#000000',
                }}
              >
                {renderProgramSectionTitle(title, titleClassName)}
              </h2>
            </div>

            <div className="sport-header-meta">
              <div
                className="sport-header-time"
                style={{
                  fontFamily: '"Dela Gothic One", cursive',
                  fontSize: 'clamp(20px, 2.5vw, 36px)',
                  color: 'rgba(232,54,45,0.15)',
                  letterSpacing: '0.05em',
                  lineHeight: 1.12,
                }}
              >
                {timeRange}
              </div>
              <p
                className="program-section-location"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 15,
                  color: '#666666',
                  lineHeight: 1.6,
                  marginTop: 8,
                  marginBottom: 0,
                }}
              >
                {location ?? (
                  <>
                    Экстрим-парк «УРАМ»
                    <br />
                    Кремлёвская набережная, 33
                  </>
                )}
              </p>
            </div>

            {headerLogo && (
              <div className="sport-header-logo-wrap">
                <img
                  src={headerLogo}
                  alt={headerLogoAlt}
                  className="program-header-logo"
                  style={{
                    height: 'clamp(48px, 6vw, 72px)',
                    width: 'auto',
                    flexShrink: 0,
                    filter: 'brightness(0)',
                    opacity: 0.25,
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {activities.map((act) => {
            const isOpen = openId === act.id
            const hasDesc = act.desc !== '' && act.desc !== null && act.desc !== undefined

            return (
              <div
                key={act.id}
                style={{
                  background: '#F5F5F5',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: isOpen ? '2px solid #F18500' : '2px solid rgba(232,54,45,0.1)',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : act.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '22px 26px',
                    textAlign: 'left',
                  }}
                  className="accordion-btn"
                >
                  <div className="accordion-title-col" style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
                    <span
                      className="accordion-title-text"
                      style={{
                        fontFamily: '"Dela Gothic One", cursive',
                        fontSize: 'clamp(14px, 1.4vw, 17px)',
                        color: '#000000',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.3,
                      }}
                    >
                      {act.title}
                    </span>
                    <span className="accordion-place-text" style={{ fontFamily: '"Inter", sans-serif', fontSize: 13, color: '#666666' }}>
                      {act.place}
                    </span>
                  </div>

                  <div
                    className="accordion-time"
                    style={{
                      fontFamily: '"Dela Gothic One", cursive',
                      fontSize: 14,
                      color: '#E8362D',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {act.time}
                  </div>

                  <div
                    className="accordion-toggle"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      border: `2px solid ${isOpen ? '#F18500' : 'rgba(232,54,45,0.25)'}`,
                      background: isOpen ? '#F18500' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.25s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      color: isOpen ? '#FFFFFF' : '#E8362D',
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    +
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? `${expandedMaxHeight}px` : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div style={{ padding: '0 26px 26px', paddingTop: 4 }} className="accordion-body">
                    <div style={{ height: 1, background: 'rgba(232,54,45,0.12)', marginBottom: 20 }} />

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: act.img ? '1fr 260px' : '1fr',
                        gap: 24,
                        alignItems: 'start',
                      }}
                      className="accordion-inner"
                    >
                      <div>
                        {hasDesc && (
                          <div
                            className="accordion-desc-text"
                            style={{
                              fontFamily: '"Inter", sans-serif',
                              fontSize: 15,
                              color: '#333333',
                              lineHeight: 1.75,
                              margin: '0 0 16px',
                              whiteSpace: typeof act.desc === 'string' ? 'pre-wrap' : 'normal',
                            }}
                          >
                            {typeof act.desc === 'string' ? linkifyText(act.desc) : act.desc}
                          </div>
                        )}

                        {act.tags.length > 0 && (
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: 8,
                              marginBottom: act.partners ? 16 : 0,
                            }}
                          >
                            {act.tags.map((tag, i) => (
                              <span
                                key={i}
                                style={{
                                  background: '#FFFFFF',
                                  border: '1.5px solid rgba(232,54,45,0.2)',
                                  borderRadius: 100,
                                  padding: '4px 14px',
                                  fontFamily: '"Inter", sans-serif',
                                  fontSize: 12,
                                  color: '#333333',
                                  fontWeight: 500,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {act.partners && (
                          <div className="accordion-partners">
                            <span className="accordion-partners-label">
                              При поддержке:
                            </span>
                            <div className="accordion-partner-badges">
                              {act.partners.map((p, i) => {
                                const name = typeof p === 'string' ? p : p.name
                                const url = typeof p === 'string' ? undefined : p.url
                                const badgeStyle: CSSProperties = {
                                  background: '#FFFFFF',
                                  border: '2px solid #F18500',
                                  borderRadius: 8,
                                  padding: '6px 16px',
                                  fontFamily: '"Dela Gothic One", cursive',
                                  fontSize: 13,
                                  color: '#E8362D',
                                  letterSpacing: '0.04em',
                                }

                                return url ? (
                                  <a
                                    key={i}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="accordion-partner-badge"
                                    style={{ ...badgeStyle, textDecoration: 'none' }}
                                  >
                                    {renderPartnerName(name)}
                                  </a>
                                ) : (
                                  <div key={i} className="accordion-partner-badge" style={badgeStyle}>
                                    {renderPartnerName(name)}
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      {act.img && (
                        <div className="accordion-image" style={{ borderRadius: 10, overflow: 'hidden', height: 160 }}>
                          <ProgramImage src={act.img} alt={act.title} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
