import OgosLogosSvg from './OgosLogosSvg'
import mobilePartnerLogos from '../../imports/Group_2131331434.svg?raw'

function renderMobileLogos(svg: string) {
  return svg
    .replace(/\s+width="[^"]*"/, '')
    .replace(/\s+height="[^"]*"/, '')
    .replace(
      '<svg ',
      '<svg class="hero-ogos-mobile-svg" preserveAspectRatio="xMidYMid meet" ',
    )
}

export default function HeroPartnerLogos() {
  return (
    <div className="hero-ogos-wrap">
      <OgosLogosSvg className="hero-ogos hero-ogos--desktop" />
      <div
        className="hero-ogos-mobile"
        aria-label="Логотипы партнёров и организаторов"
        dangerouslySetInnerHTML={{ __html: renderMobileLogos(mobilePartnerLogos) }}
      />
    </div>
  )
}
