import OgosLogosSvg from './OgosLogosSvg'
import svgPaths from '../../imports/Hero/svg-pkd3v9haho'
import youthTatarstanLogo from '../../imports/Group_2131331422.svg?raw'
import youthCenterLogo from '../../imports/Group.svg?raw'
import rosmolodezhGrantsLogo from '../../imports/Group_2131331431.svg?raw'
import alabugaLogo from '../../imports/Group_2131331204.svg?raw'
import enterLogo from '../../imports/Group-1.svg?raw'
import dfmLogo from '../../imports/Group-3.svg?raw'

function renderHeroLogo(svg: string) {
  return svg
    .replace(/\s+width="[^"]*"/, '')
    .replace(/\s+height="[^"]*"/, '')
    .replace(/fill="black"/g, 'fill="white"')
    .replace(/stroke="black"/g, 'stroke="white"')
    .replace(
      '<svg ',
      '<svg style="width:auto;height:100%;max-width:100%;display:block" preserveAspectRatio="xMidYMid meet" ',
    )
}

function LogoCell({
  html,
  className,
  label,
}: {
  html: string
  className?: string
  label: string
}) {
  return (
    <div
      className={`hero-partner-logo-cell${className ? ` ${className}` : ''}`}
      role="img"
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: renderHeroLogo(html) }}
    />
  )
}

function UramLogo() {
  return (
    <div className="hero-partner-logo-cell hero-partner-logo-cell--uram" role="img" aria-label="Экстрим-парк УРАМ">
      <svg viewBox="0 0 90.8724 27.2297" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d={svgPaths.p8875280} fill="white" />
        <path d={svgPaths.p12f91d00} fill="white" />
        <path d={svgPaths.p32548100} fill="white" />
        <path d={svgPaths.p9973300} fill="white" />
        <path d={svgPaths.p2d78cb00} fill="white" />
        <path d={svgPaths.pcf4f400} fill="white" />
        <path d={svgPaths.p1f2b3000} fill="white" />
        <path d={svgPaths.p22b01100} fill="white" />
        <path d={svgPaths.p22451a80} fill="white" />
        <path d={svgPaths.p14162e00} fill="white" />
      </svg>
    </div>
  )
}

function BeelineLogo() {
  return (
    <div className="hero-partner-logo-cell hero-partner-logo-cell--beeline" role="img" aria-label="Билайн">
      <svg viewBox="0 0 74.4885 13.9495" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d={svgPaths.pdbfed00} fill="white" />
      </svg>
    </div>
  )
}

export default function HeroPartnerLogos() {
  return (
    <div className="hero-ogos-wrap">
      <OgosLogosSvg className="hero-ogos hero-ogos--desktop" />
      <div className="hero-ogos-grid" aria-label="Логотипы партнёров и организаторов">
        <LogoCell html={youthTatarstanLogo} className="hero-partner-logo-cell--wide" label="Молодёжь Татарстана" />
        <LogoCell html={youthCenterLogo} className="hero-partner-logo-cell--wide" label="Молодёжный центр" />
        <UramLogo />
        <LogoCell html={rosmolodezhGrantsLogo} className="hero-partner-logo-cell--tall" label="Росмолодёжь.Гранты" />
        <BeelineLogo />
        <LogoCell html={alabugaLogo} className="hero-partner-logo-cell--wide" label="Алабуга Политех" />
        <LogoCell html={enterLogo} label="Enter" />
        <LogoCell html={dfmLogo} label="DFM Казань" />
      </div>
    </div>
  )
}
