export default function HeroDateBlock({ className }: { className?: string }) {
  return (
    <div className={`${className ?? ''} hero-date-block`.trim()}>
      <div className="hero-date-day">27/06</div>
      <div className="hero-date-venue">Экстрим-парк «УРАМ»</div>
      <div className="hero-date-address">Кремлёвская набережная, 33</div>
    </div>
  )
}
