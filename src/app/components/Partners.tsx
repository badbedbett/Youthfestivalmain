import orgLogo1 from '../../imports/Group_2131331422.svg?raw'
import orgLogo2 from '../../imports/Group.svg?raw'
import orgLogo3 from '../../imports/Group-1.svg?raw'
import orgLogo4 from '../../imports/Group-2.svg?raw'
import orgLogo5 from '../../imports/_____1.svg?raw'
import goldLogo1 from '../../imports/Group_2131331204.svg?raw'
import goldLogo2 from '../../imports/Group_2131331205.svg?raw'
import goldLogo3 from '../../imports/Layer_1.svg?raw'
import infoLogo1 from '../../imports/Group_2131331431.svg?raw'
import infoLogo2 from '../../imports/Group_2131331432.svg?raw'
import infoLogo3 from '../../imports/Group-3.svg?raw'
import infoLogo4 from '../../imports/Group-1-1.svg?raw'
import infoLogo5 from '../../imports/Mask_group.svg?raw'
import infoLogo6 from '../../imports/_________________________________2.svg?raw'

const CARD_WIDTH = 200
const CARD_HEIGHT = 72
const CARD_GAP = 16
const LOGO_BOX_WIDTH = 136
const LOGO_BOX_HEIGHT = 40

const tiers = [
  {
    key: 'org',
    label: 'Организаторы',
    accent: '#E8362D',
    partners: [
      { name: 'org-1', logo: orgLogo1 },
      { name: 'org-2', logo: orgLogo2 },
      { name: 'org-3', logo: orgLogo3 },
      { name: 'org-4', logo: orgLogo4 },
      { name: 'org-5', logo: orgLogo5 },
    ],
  },
  {
    key: 'gold',
    label: 'Генеральные партнёры',
    accent: '#F18500',
    partners: [
      { name: 'gold-1', logo: goldLogo1 },
      { name: 'gold-2', logo: goldLogo2 },
      { name: 'gold-3', logo: goldLogo3 },
    ],
  },
  {
    key: 'info',
    label: 'Информационные партнёры',
    accent: '#FFDF00',
    partners: [
      { name: 'info-3', logo: infoLogo3 },
      { name: 'info-4', logo: infoLogo4 },
      { name: 'info-5', logo: infoLogo5 },
      { name: 'info-6', logo: infoLogo6 },
    ],
  },
  {
    key: 'framework',
    label: 'в рамках:',
    accent: '#BF00FF',
    partners: [
      { name: 'info-1', logo: infoLogo1 },
      { name: 'info-2', logo: infoLogo2 },
    ],
  },
]

function renderLogo(logo: string) {
  return logo
    .replace(/\s+width="[^"]*"/, '')
    .replace(/\s+height="[^"]*"/, '')
    .replace(
      '<svg ',
      '<svg class="partner-logo-svg" preserveAspectRatio="xMidYMid meet" '
    )
}

export default function Partners() {
  return (
    <section
      id="partners"
      className="section-pad"
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
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 36,
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #FFDF00, #F18500)',
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
              Вместе мы делаем праздник
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
            <span className="gradient-text-full">ПАРТНЁРЫ</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {tiers.map(tier => (
            <div key={tier.key}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    background: tier.accent,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 11,
                    color: '#666666',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tier.label}
                </span>
              </div>

              <div className="partners-row" style={{ gap: CARD_GAP }}>
                {tier.partners.map(p => (
                  <div
                    key={p.name}
                    className="partner-card"
                    style={{
                      width: CARD_WIDTH,
                      height: CARD_HEIGHT,
                      background: '#FFFFFF',
                      borderRadius: 12,
                      border: '2px solid transparent',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      cursor: 'default',
                      transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.15s',
                      position: 'relative',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => {
                      const t = e.currentTarget as HTMLElement
                      t.style.borderColor = tier.accent
                      t.style.boxShadow = `0 6px 20px ${tier.accent}28`
                      t.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      const t = e.currentTarget as HTMLElement
                      t.style.borderColor = 'transparent'
                      t.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
                      t.style.transform = 'translateY(0)'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        borderRadius: '10px 10px 0 0',
                        background: tier.accent,
                      }}
                    />
                    <div
                      className="partner-card-logo"
                      style={{
                        width: LOGO_BOX_WIDTH,
                        height: LOGO_BOX_HEIGHT,
                      }}
                      dangerouslySetInnerHTML={{ __html: renderLogo(p.logo) }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partners-row {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
        }
        .partner-card {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .partner-card-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
        .partner-card-logo .partner-logo-svg {
          display: block;
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
        }
      `}</style>
    </section>
  )
}
