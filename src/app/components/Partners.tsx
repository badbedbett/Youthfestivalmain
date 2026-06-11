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

// logoHeight: индивидуальный подбор под визуальный баланс
// AR = w/h исходного SVG; целевая ширина ~100–120px для горизонтальных,
// ~40–50px для квадратных/вертикальных — компенсируется одинаковой ПЛОЩАДЬЮ
const tiers = [
  {
    key: 'org',
    label: 'Организаторы',
    accent: '#E8362D',
    partners: [
      { name: 'org-1', logo: orgLogo1, logoHeight: 19 }, // 283×41 AR6.9 → ~131px wide
      { name: 'org-2', logo: orgLogo2, logoHeight: 26 }, // 283×68 AR4.2 → ~109px wide
      { name: 'org-3', logo: orgLogo3, logoHeight: 24 }, // 233×59 AR3.95 → ~95px wide
      { name: 'org-4', logo: orgLogo4, logoHeight: 24 }, // 297×67 AR4.43 → ~106px wide
      { name: 'org-5', logo: orgLogo5, logoHeight: 22 }, // 193×52 AR3.71 → ~82px wide
    ],
  },
  {
    key: 'gold',
    label: 'Генеральные партнёры',
    accent: '#F18500',
    partners: [
      { name: 'gold-1', logo: goldLogo1, logoHeight: 20 }, // 332×53 AR6.3 → ~126px wide
      { name: 'gold-2', logo: goldLogo2, logoHeight: 38 }, // 299×90 AR3.3 → ~126px wide
      { name: 'gold-3', logo: goldLogo3, logoHeight: 22 }, // 245×46 AR5.3 → ~117px wide
    ],
  },
  {
    key: 'info',
    label: 'Информационные партнёры и в рамках:',
    accent: '#FFDF00',
    partners: [
      { name: 'info-1', logo: infoLogo1, logoHeight: 34 }, // 124×102 AR1.2 → ~40px wide
      { name: 'info-2', logo: infoLogo2, logoHeight: 34 }, // 98×111 AR0.88 → ~30px wide
      { name: 'info-3', logo: infoLogo3, logoHeight: 20 }, // 169×43 AR3.9 → ~79px wide
      { name: 'info-4', logo: infoLogo4, logoHeight: 26 }, // 119×58 AR2.1 → ~53px wide
      { name: 'info-5', logo: infoLogo5, logoHeight: 26 }, // 149×72 AR2.1 → ~54px wide
      { name: 'info-6', logo: infoLogo6, logoHeight: 26 }, // 115×72 AR1.6 → ~41px wide
    ],
  },
]

function renderLogo(logo: string, logoHeight: number) {
  return logo
    .replace(/\s+width="[^"]*"/, '')
    .replace(/\s+height="[^"]*"/, '')
    .replace(
      '<svg ',
      `<svg style="width:auto;height:${logoHeight}px;display:block;flex-shrink:0" preserveAspectRatio="xMidYMid meet" `
    )
}

export default function Partners() {
  return (
    <section
      id="partners"
      style={{
        background: '#F5F5F5',
        padding: '80px 48px',
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
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(36px, 5vw, 72px)',
              lineHeight: 0.92,
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

              <div
                style={
                  tier.key === 'org'
                    ? { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }
                    : { display: 'flex', flexWrap: 'wrap', gap: 10 }
                }
              >
                {tier.partners.map(p => {
                  const lp = p as { name: string; logo: string; logoHeight: number }
                  return (
                    <div
                      key={p.name}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: 12,
                        padding: tier.key === 'org' ? '18px 20px' : tier.key === 'gold' ? '20px 32px' : '16px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: tier.key === 'gold' ? 160 : tier.key === 'org' ? undefined : 120,
                        height: tier.key === 'org' || tier.key === 'gold' ? 72 : 68,
                        border: '2px solid transparent',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        cursor: 'default',
                        transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.15s',
                        position: 'relative',
                        overflow: 'hidden',
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
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '6px 12px',
                          boxSizing: 'border-box',
                          width: '100%',
                          height: '100%',
                        }}
                        dangerouslySetInnerHTML={{ __html: renderLogo(lp.logo, lp.logoHeight) }}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
