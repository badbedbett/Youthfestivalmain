import OgosLogosSvg from './OgosLogosSvg'

type MobileLogo = {
  src: string
  alt: string
  className?: string
}

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

function AlabugaLogo() {
  return (
    <svg
      viewBox="830 10 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-partner-logo hero-partner-logo--alabuga"
      aria-label="Алабуга Политех"
    >
      <path d="M835.824 39.2266H830V45.0601H835.824V39.2266Z" fill="white" />
      <path d="M847.502 27.5312H835.824V39.2274H847.502V27.5312Z" fill="white" />
      <path d="M865.035 10H847.533V27.5297H865.035V10Z" fill="white" />
      <path d="M876.912 27.5316V18.6797H879.201L881.201 23.7587L883.2 18.6797H885.489V27.5316H883.316V23.1202L881.954 26.748H880.447L879.085 23.1202V27.5316H876.912Z" fill="white" />
      <path d="M876.912 39.516V30.6641H879.085V37.6585H881.983V30.6641H884.156V37.6585H884.794L884.533 41.5186H882.649V39.516H876.912Z" fill="white" />
    </svg>
  )
}

function RosmolodezhLogo() {
  return (
    <svg
      viewBox="1680 0 54 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-partner-logo hero-partner-logo--rosmolodezh"
      aria-label="Росмолодёжь"
    >
      <path
        d="M1686.74 6.10547L1687.57 8.33633L1688.4 6.10547H1689.06V9.03488H1688.56V8.06593L1688.61 6.78149L1687.75 9.03488H1687.39L1686.54 6.78149L1686.58 8.06593V9.03488H1686.09V6.10547H1686.74Z"
        fill="white"
      />
      <path
        d="M1692 7.63987C1692 7.93281 1691.96 8.18069 1691.84 8.38349C1691.75 8.60883 1691.6 8.76657 1691.42 8.87924C1691.24 8.99191 1691.01 9.05951 1690.79 9.05951C1690.56 9.05951 1690.34 8.99191 1690.16 8.87924C1689.98 8.76657 1689.82 8.60883 1689.73 8.38349C1689.64 8.15815 1689.57 7.93281 1689.57 7.63987V7.48213C1689.57 7.18919 1689.62 6.94132 1689.73 6.73852C1689.82 6.51318 1689.98 6.35544 1690.16 6.24277C1690.34 6.1301 1690.56 6.0625 1690.79 6.0625C1691.01 6.0625 1691.24 6.1301 1691.42 6.24277C1691.6 6.35544 1691.73 6.51318 1691.84 6.73852C1691.93 6.96386 1692 7.21172 1692 7.48213V7.63987ZM1691.51 7.48213C1691.51 7.16666 1691.44 6.91879 1691.33 6.73852C1691.21 6.55824 1691.03 6.4681 1690.81 6.4681C1690.58 6.4681 1690.43 6.55824 1690.29 6.71598C1690.18 6.89625 1690.11 7.12159 1690.11 7.43706V7.5948C1690.11 7.91027 1690.18 8.15815 1690.29 8.33842C1690.43 8.51869 1690.58 8.60883 1690.81 8.60883C1691.03 8.60883 1691.21 8.51869 1691.33 8.36095C1691.44 8.18068 1691.51 7.93281 1691.51 7.61734V7.4596V7.48213Z"
        fill="white"
      />
      <path
        d="M1697.74 7.63987C1697.74 7.93281 1697.7 8.18069 1697.58 8.38349C1697.49 8.60883 1697.34 8.76657 1697.16 8.87924C1696.98 8.99191 1696.75 9.05951 1696.53 9.05951C1696.3 9.05951 1696.08 8.99191 1695.9 8.87924C1695.72 8.76657 1695.56 8.60883 1695.47 8.38349C1695.36 8.15815 1695.31 7.93281 1695.31 7.63987V7.48213C1695.31 7.18919 1695.36 6.94132 1695.47 6.73852C1695.56 6.51318 1695.72 6.35544 1695.9 6.24277C1696.08 6.1301 1696.3 6.0625 1696.53 6.0625C1696.75 6.0625 1696.98 6.1301 1697.16 6.24277C1697.34 6.35544 1697.47 6.51318 1697.58 6.73852C1697.67 6.96386 1697.74 7.21172 1697.74 7.48213V7.63987ZM1697.25 7.48213C1697.25 7.16666 1697.18 6.91879 1697.07 6.73852C1696.95 6.55824 1696.77 6.4681 1696.55 6.4681C1696.32 6.4681 1696.17 6.55824 1696.03 6.71598C1695.9 6.89625 1695.85 7.12159 1695.85 7.43706V7.5948C1695.85 7.91027 1695.92 8.15815 1696.03 8.33842C1696.17 8.51869 1696.32 8.60883 1696.55 8.60883C1696.77 8.60883 1696.95 8.51869 1697.07 8.36095C1697.18 8.18068 1697.25 7.93281 1697.25 7.61734V7.4596V7.48213Z"
        fill="white"
      />
    </svg>
  )
}

export default function HeroPartnerLogos() {
  return (
    <div className="hero-ogos-wrap">
      <OgosLogosSvg className="hero-ogos hero-ogos--desktop" />
      <div className="hero-ogos-grid" aria-label="Логотипы партнёров и организаторов">
        <LogoImg logo={{ src: '/images/hero-logos/ministry.png', alt: 'Министерство по делам молодёжи РТ' }} />
        <LogoImg logo={{ src: '/images/hero-logos/youth-tatarstan.png', alt: 'Молодёжь Татарстана' }} />
        <LogoImg logo={{ src: '/images/hero-logos/youth-center.png', alt: 'Молодёжный центр' }} />
        <LogoImg logo={{ src: '/images/hero-logos/sber.png', alt: 'Сбер' }} />
        <AlabugaLogo />
        <LogoImg logo={{ src: '/images/hero-logos/beeline.png', alt: 'Билайн' }} />
        <LogoImg logo={{ src: '/images/hero-logos/enter.png', alt: 'Enter' }} />
        <LogoImg logo={{ src: '/images/hero-logos/dfm.png', alt: 'DFM Казань' }} />
        <LogoImg
          logo={{
            src: '/images/hero-logos/uram.png',
            alt: 'Экстрим-парк УРАМ',
            className: 'hero-partner-logo--uram',
          }}
        />
        <RosmolodezhLogo />
      </div>
    </div>
  )
}
