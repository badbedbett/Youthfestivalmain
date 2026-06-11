import DateBlockSvg from './DateBlockSvg'

export default function HeroDateBlock({ className }: { className?: string }) {
  return (
    <>
      <DateBlockSvg
        className={`${className ?? ''} hero-date-desktop`.trim()}
        style={{
          width: 'clamp(200px, 28vw, 320px)',
          height: 'auto',
          display: 'block',
        }}
      />
      <div className={`${className ?? ''} hero-date-mobile`.trim()}>
        <div className="hero-date-day">27/06</div>
        <div className="hero-date-venue">Экстрим-парк «УРАМ»</div>
        <div className="hero-date-address">Кремлёвская набережная, 33</div>
      </div>
    </>
  )
}
