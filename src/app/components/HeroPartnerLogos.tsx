import OgosLogosSvg from './OgosLogosSvg'

type MobileLogo = {
  src: string
  alt: string
  className?: string
}

const MOBILE_LOGOS: MobileLogo[] = [
  { src: '/images/hero-logos/youth-tatarstan.png', alt: 'Молодёжь Татарстана' },
  { src: '/images/hero-logos/youth-center.png', alt: 'Молодёжный центр' },
  { src: '/images/hero-logos/uram.png', alt: 'Экстрим-парк УРАМ', className: 'hero-partner-logo--uram' },
  { src: '/images/hero-logos/rosmolodezh-grants.png', alt: 'Росмолодёжь.Гранты' },
  { src: '/images/hero-logos/beeline.png', alt: 'Билайн' },
  { src: '/images/hero-logos/alabuga.png', alt: 'Алабуга Политех' },
  { src: '/images/hero-logos/enter.png', alt: 'Enter' },
  { src: '/images/hero-logos/dfm.png', alt: 'DFM Казань' },
]

function LogoImg({ logo }: { logo: MobileLogo }) {
  return (
    <img
      src={logo.src}
      alt={logo.alt}
      className={`hero-partner-logo${logo.className ? ` ${logo.className}` : ''}`}
      loading="lazy"
      decoding="async"
    />
  )
}

export default function HeroPartnerLogos() {
  return (
    <div className="hero-ogos-wrap">
      <OgosLogosSvg className="hero-ogos hero-ogos--desktop" />
      <div className="hero-ogos-grid" aria-label="Логотипы партнёров и организаторов">
        {MOBILE_LOGOS.map(logo => (
          <LogoImg key={logo.src} logo={logo} />
        ))}
      </div>
    </div>
  )
}
