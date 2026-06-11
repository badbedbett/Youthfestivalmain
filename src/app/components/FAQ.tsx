import { useState } from 'react'

const faqs: { q: string; a: string; multiline?: boolean }[] = [
  {
    q: 'Как добраться до экстрим-парка «УРАМ»?',
    a: 'Адрес: г. Казань, ул. Кремлёвская набережная, зд. 33 \nОстановки: \n• «Мост Миллениум»: автобусы №28, 43, 54 \n• «ЦПКиО им Горького»: троллейбусы №3, 5, 7 и автобусы №10, 35а, 63, 70, 91 \n• «Улица Толстого»: автобусы №22, 89, 28а \n \nМетро: Кремлёвская, Суконная Слобода, Площадь Тукая',
    multiline: true,
  },
  {
    q: 'Вход на День молодёжи платный?',
    a: 'Нет! Вход на праздник абсолютно бесплатный для всех, но по обязательной предварительной регистрации по ссылкам: https://max.ru/youthday_bot (MAX) и https://den-molodezhi-2026.timepad.ru/event/4025106/. Для участия в отдельных соревнованиях (баскетбол 3×3, воркаут и другие) потребуется дополнительная регистрация — это тоже бесплатно.',
  },
  {
    q: 'Для какого возраста мероприятие?',
    a: 'День молодёжи для всех! Основная программа рассчитана на возраст 14-35 лет. Однако организаторы позаботились обо всех возрастах и продумали программу для каждого. Ведь молодость — это состояние души, а не цифры в паспорте.',
  },
  {
    q: 'Будут ли трансляции мероприятия?',
    a: 'Трансляция не предусмотрена. Приходи и вживую посети интересующие тебя события.',
  },
  {
    q: 'Как стать волонтёром праздника?',
    a: 'Заполните анкету на сайте: https://dobro.ru/event/11751333. Принимаются заявки от граждан РФ от 16 лет. Волонтёры получат фирменный мерч, питание и благодарственное письмо.',
  },
  {
    q: 'Как принять участие в соревнованиях?',
    a: 'Зарегистрируйтесь в отдельных ссылках, прикрепленных в программе направления «Спорт».',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="section-pad"
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
          background: 'linear-gradient(to bottom, #BF00FF, #E8362D, #F18500, #FFDF00)',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header — full width, above accordion */}
        <div style={{ marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <div
              style={{
                width: 36,
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #F18500, #FFDF00)',
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
              Есть вопросы?
            </span>
          </div>
          <h2
            className="section-display-title"
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 1.12,
              color: '#000000',
              margin: 0,
              letterSpacing: 0,
            }}
          >
            ЧАСТО
            <br />
            <span className="gradient-text-faq">ЗАДАВАЕМЫЕ</span>
            <br />
            ВОПРОСЫ
          </h2>
        </div>

        {/* Accordion — full width */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                style={{
                  background: isOpen ? '#FFFFFF' : '#F5F5F5',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: isOpen ? '2px solid #F18500' : '2px solid rgba(232,54,45,0.1)',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="faq-question-btn"
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    textAlign: 'left',
                    minWidth: 0,
                  }}
                >
                  <span
                    className="faq-question-text"
                    style={{
                      fontFamily: '"Dela Gothic One", cursive',
                      fontSize: 'clamp(14px, 1.3vw, 16px)',
                      color: '#000000',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.35,
                      minWidth: 0,
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      border: `2px solid ${isOpen ? '#F18500' : 'rgba(241,133,0,0.3)'}`,
                      background: isOpen ? '#F18500' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      color: isOpen ? '#FFFFFF' : '#F18500',
                      fontSize: 18,
                    }}
                  >
                    +
                  </div>
                </button>

                <div
                  className="faq-answer-wrap"
                  style={{
                    maxHeight: isOpen ? '1200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div style={{ padding: '0 24px 22px' }}>
                    <div style={{ height: 1, background: 'rgba(241,133,0,0.15)', marginBottom: 14 }} />
                    <p className="faq-answer-text" style={{ fontFamily: '"Inter", sans-serif', fontSize: 15, color: '#333333', lineHeight: 1.75, margin: 0, whiteSpace: faq.multiline ? 'pre-wrap' : 'normal' }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact note */}
        <div style={{ marginTop: 40, fontFamily: '"Inter", sans-serif', fontSize: 14, color: '#666666', lineHeight: 1.6 }}>
          Не нашли ответ? Напишите нам в социальные сети фестиваля День молодёжи в РТ:
          <br />
          <a href="https://t.me/dmtatarstan" style={{ color: '#E8362D', fontWeight: 600, textDecoration: 'none' }}>
            Telegram: t.me/dmtatarstan
          </a>
          <br />
          <a href="https://vk.com/molodtatarstan" style={{ color: '#E8362D', fontWeight: 600, textDecoration: 'none' }}>
            ВКонтакте: vk.com/molodtatarstan
          </a>
        </div>
      </div>
    </section>
  )
}
