import { useState } from 'react'
import imgYaratam from '../../imports/СпортВРаскрытом/a33521b334a8147ed5a995f86465ae15297d4eca.png'
import imgBilain from '../../imports/СпортВРаскрытом/722529298ac03163b70b7353471e779759368bf8.png'
import imgBMX from '../../imports/СпортВРаскрытом/4beaaf873f010ece6c3584a541be5ad288949572.png'
import imgSamokat from '../../imports/СпортВРаскрытом/22c0e017888a5492580d270853191e3f6dba03a9.png'
import imgWorkout from '../../imports/СпортВРаскрытом/fc568833401058e789b59b03c94ef6a2cfa8b6f4.png'
import imgParkour from '../../imports/СпортВРаскрытом/2a3173d34f961088150b773b41248b32547716ca.png'
import imgMediaBasket from '../../imports/СпортВРаскрытом/567803a56d69c5ebca0cf60c905e1ffe6b3573a2.png'
import imgDance from '../../imports/СпортВРаскрытом/34100cba151919f66fa011905ed858de1325956b.png'
import imgRollers from '../../imports/СпортВРаскрытом/eb4bd3979c20774393dee8003df4934540a8a248.png'
import imgJiuJitsu from '../../imports/СпортВРаскрытом/9d6887e63b7779bce0d4d098702ad6f6e028991a.png'

const activities = [
  {
    id: 13,
    title: 'Соревнования по баскетболу 3х3',
    time: '10:00 – 12:30',
    place: 'Стритбольные поля',
    desc: 'Открытые соревнования по стритболу для мужчин в общей категории 14-35 лет.',
    img: null as string | null,
    partners: ['КазБас'] as string[] | null,
    tags: ['Баскетбол', 'Соревнования', 'Для мужчин'],
  },
  {
    id: 10,
    title: 'Серия открытых тренировок от студии фитнеса, йоги, растяжки и танцев «Яратам»',
    time: '10:00 – 14:00',
    place: 'Площадка ЗОЖ',
    desc: 'Программа тренировок:\n10:00 Силовая тренировка\n11:00 Йога\n12:00 Растяжка\n13:00 Здоровая спина\n\nДля участия необходимо зарегистрироваться и иметь при себе свои коврики.\n\nРегистрация: https://forms.yandex.ru/u/6a28107e49af479c0d1ffd33',
    img: imgYaratam as string | null,
    partners: ['Яратам'] as string[] | null,
    tags: ['Зарядка', 'Стрейчинг', 'Кардио'],
  },
  {
    id: 14,
    title: 'Мастер-класс по игре на Ханге',
    time: '11:00 – 12:00',
    place: 'Площадка ЗОЖ',
    desc: 'Подробности уточняются.',
    img: null as string | null,
    partners: null as string[] | null,
    tags: ['Мастер-класс', 'Ханге', 'Музыка'],
  },
  {
    id: 12,
    title: 'Активности от партнёра Билайн',
    time: '12:00 – 19:00',
    place: 'Стрит-плаза, бетонная сцена',
    desc: 'Партнёр фестиваля — Билайн — готовит насыщенную программу активностей для гостей грядущего фестиваля.\nВ самом центре парка расположится бренд-зона, где можно будет заработать баллы и обменять их на фирменный мерч, выбрать наиболее откликающуюся фразу на стене слов, поучаствовать в интерактивной игре и почувствовать себя скейтером, выполняя трюки, посетить глиттер-бар и принять участие в других развлечениях.\nВ зоне скейтпарка гостей будет ждать комфортная чилл-зона с видом на сцену. Для начинающих скейтеров пройдут открытые тренировки под руководством прорайдеров DC Дмитрия Двойнишникова и Эмина Алиева, а опытные спортсмены смогут побороться за победу в зрелищном контесте на лучший трюк на специальной фигуре от Билайн.',
    img: imgBilain as string | null,
    partners: ['Билайн'] as string[] | null,
    tags: ['Зарядка', 'Стрейчинг', 'Кардио'],
  },
  {
    id: 1,
    title: 'Соревнования и мастер-классы по BMX',
    time: '12:00 – 19:00',
    place: 'Эир-парк',
    desc: 'Профессиональные райдеры со всей страны покажут мастерство в трюках на BMX. Открытые мастер-классы для начинающих, квалификационные заезды и финальные соревнования по нескольким дисциплинам.',
    img: imgBMX as string | null,
    partners: null as string[] | null,
    tags: ['Фристайл', 'Парк', 'Стрит'],
  },
  {
    id: 2,
    title: 'Соревнования и мастер-классы по самокату',
    time: '12:00 – 19:00',
    place: 'Эир-парк',
    desc: 'Выступления топ-скутеристов страны. Соревнования в стиле фристайл: флэт, стрит, верт. Мастер-классы для начинающих от профессиональных инструкторов.',
    img: imgSamokat as string | null,
    partners: null as string[] | null,
    tags: ['Флэт', 'Стрит', 'Верт'],
  },
  {
    id: 3,
    title: 'Соревнования и мастер-классы по воркауту',
    time: '12:00 – 19:00',
    place: 'Воркаут-площадка',
    desc: 'Соревнования по воркауту в направлениях Статика, Динамика и Воркаут-фристайл, а также мастер-класс от приглашенного судьи.\n\nРегистрация: https://forms.yandex.ru/u/6a27ea2c90fa7bbc866953b9',
    img: imgWorkout as string | null,
    partners: null as string[] | null,
    tags: ['Статика', 'Динамика', 'Фристайл'],
  },
  {
    id: 4,
    title: 'Соревнования и мастер-класс по паркуру',
    time: '12:00 – 19:00',
    place: 'Площадка для паркура',
    desc: 'Соревнования по паркуру в направлении фриран для участников трех возрастных категорий: до 12 лет, 13-15 лет и 16+, а также мастер-класс от приглашенного судьи.\n\nРегистрация: https://forms.yandex.ru/u/6a27f087e010db93793f25b0',
    img: imgParkour as string | null,
    partners: null as string[] | null,
    tags: ['Фриран до 12 лет', 'Фриран 13-15 лет', 'Фриран 16+', 'Мастер-класс'],
  },
  {
    id: 5,
    title: 'Медиатурнир по баскетболу 3х3 при поддержке Билайна',
    time: '13:00 – 18:00',
    place: 'Стритбольные поля',
    desc: 'Enter вместе с командой экстрим-парка «УРАМ» при поддержке Билайна проведет любительский медиатурнир по баскетболу 3х3 и данк-контест, где игроки будут соревноваться в мастерстве и эффектности исполнения бросков сверху. В турнире примет участие хедлайнер — участник федерального масштаба, имя которого мы пока не раскрываем.\nНа обновленной брендированной площадке сразятся команды городских проектов, блогеры и лидеры мнений, а также сборные жителей Казани.\n\nПодробности и правила регистрации: https://entermedia.io/weekend/igra-na-vylet-enter-i-uram-provedut-mediaturnir-po-basketbolu-3h3-pri-podderzhke-bilajna/',
    img: imgMediaBasket as string | null,
    partners: ['Enter', 'Билайн'] as string[] | null,
    tags: ['Командный', 'Призовой фонд', '18+'],
  },
  {
    id: 9,
    title: 'Танцевальная площадка',
    time: '13:00 – 18:00',
    place: 'Бетонная площадка со стороны лектория',
    desc: 'Дополнительная информация появится в скором времени.',
    img: imgDance as string | null,
    partners: null as string[] | null,
    tags: [],
  },
  {
    id: 6,
    title: 'Соревнования по роликам',
    time: '14:00 – 15:00',
    place: 'Боул / Стрит-плаза',
    desc: 'Соревнования по агрессивным роликам в боуле для женщин, участников 13-16 лет и 17+,\nа также соревнования в стрит-плазе на «Лучший трюк».\n\nРегистрация: https://forms.yandex.ru/u/6a27f1bf90fa7bbef26953eb',
    img: imgRollers as string | null,
    partners: null as string[] | null,
    tags: ['Боул', 'Стрит'],
  },
  {
    id: 7,
    title: 'Турнир по бразильскому джиу-джитсу',
    time: '14:00 – 18:00',
    place: 'Площадка ЗОЖ',
    desc: 'Открытый турнир по бразильскому джиу-джитсу от команд «Тета» и «Стрела» в разных весовых категориях для участников 14-15 лет, 16-17 лет и 18+.',
    img: imgJiuJitsu as string | null,
    partners: ['Тета', 'Стрела'] as string[] | null,
    tags: ['Все категории'],
  },
  {
    id: 8,
    title: 'Соревнования по BMX — Стрит',
    time: '15:00 – 17:00',
    place: 'Стрит-плаза',
    desc: 'Соревнования в дисциплине BMX стрит в категориях «любители» и «профессионалы», а также соревнования на «лучший трюк».\n\nРегистрация: https://forms.yandex.ru/u/6a27f13c1f1eb59a709fbaad',
    img: imgBMX as string | null,
    partners: null as string[] | null,
    tags: [],
  },
  {
    id: 11,
    title: 'Показательные выступления по Ушу',
    time: 'Время уточняется',
    place: 'Площадка ЗОЖ',
    desc: 'Показательные выступления мастеров ушу из спортивных школ Татарстана. Демонстрация традиционных и спортивных стилей. Возможность попробовать базовые элементы.',
    img: null as string | null,
    partners: null as string[] | null,
    tags: ['Традиционный', 'Спортивный'],
  },
]

export default function SportProgram() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section
      id="sport-program"
      style={{
        background: '#FFFFFF',
        padding: '100px 48px',
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            marginBottom: 56,
            alignItems: 'end',
          }}
          className="sport-header"
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
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
            <h2
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: 'clamp(42px, 6vw, 88px)',
                lineHeight: 0.9,
                margin: 0,
                letterSpacing: '-0.02em',
                color: '#000000',
              }}
            >
              <span className="gradient-text-warm">СПОРТ</span>
            </h2>
          </div>
          <div>
            <div
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: 'clamp(20px, 2.5vw, 36px)',
                color: 'rgba(232,54,45,0.15)',
                letterSpacing: '0.05em',
              }}
            >
              10:00 – 19:00
            </div>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 15,
                color: '#666666',
                lineHeight: 1.6,
                marginTop: 8,
              }}
            >
              Экстрим-парк «УРАМ» · Кремлёвская набережная, 33
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {activities.map((act) => {
            const isOpen = openId === act.id
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
                    display: 'grid',
                    gridTemplateColumns: '1fr auto auto',
                    gap: 16,
                    alignItems: 'center',
                    textAlign: 'left',
                  }}
                  className="accordion-btn"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <span
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
                    <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 13, color: '#666666' }}>
                      {act.place}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: '"Dela Gothic One", cursive',
                      fontSize: 14,
                      color: '#E8362D',
                      letterSpacing: '0.02em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {act.time}
                  </div>

                  <div
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
                    maxHeight: isOpen ? '600px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div style={{ padding: '0 26px 26px', paddingTop: 4 }}>
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
                        <p
                          style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: 15,
                            color: '#333333',
                            lineHeight: 1.75,
                            margin: '0 0 16px',
                            whiteSpace: 'pre-wrap',
                          }}
                        >
                          {act.desc}
                        </p>

                        {act.tags.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: act.partners ? 16 : 0 }}>
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
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                            <span
                              style={{
                                fontFamily: '"Inter", sans-serif',
                                fontSize: 11,
                                color: '#666666',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontWeight: 600,
                              }}
                            >
                              При поддержке:
                            </span>
                            {act.partners.map((p, i) => (
                              <div
                                key={i}
                                style={{
                                  background: '#FFFFFF',
                                  border: '2px solid #F18500',
                                  borderRadius: 8,
                                  padding: '6px 16px',
                                  fontFamily: '"Dela Gothic One", cursive',
                                  fontSize: 13,
                                  color: '#E8362D',
                                  letterSpacing: '0.04em',
                                }}
                              >
                                {p}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {act.img && (
                        <div style={{ borderRadius: 10, overflow: 'hidden', height: 160 }}>
                          <img
                            src={act.img}
                            alt={act.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                          />
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

      <style>{`
        @media (max-width: 768px) {
          .sport-header { grid-template-columns: 1fr !important; }
          .accordion-btn { grid-template-columns: 1fr auto !important; }
          .accordion-btn > div:nth-child(2) { display: none; }
          .accordion-inner { grid-template-columns: 1fr !important; }
          .accordion-inner > div:last-child { display: none; }
        }
      `}</style>
    </section>
  )
}
