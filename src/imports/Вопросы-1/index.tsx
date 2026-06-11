function Container3() {
  return <div className="bg-gradient-to-r from-[#f18500] h-[4px] relative rounded-[2px] shrink-0 to-[#ffdf00] w-[36px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[18px] relative shrink-0 w-[128.163px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[#f18500] text-[12px] top-[-0.2px] tracking-[1.8px] uppercase whitespace-nowrap">Есть вопросы?</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[6.6px]" data-name="Container">
      <Container3 />
      <Text />
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[42.6px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[53.65px] left-0 top-[53.65px] w-[544.538px]" data-name="Text">
      <p className="[word-break:break-word] absolute bg-clip-text font-['Dela_Gothic_One:Regular',sans-serif] leading-[53.654px] left-0 not-italic text-[58.32px] text-[transparent] top-[-1px] tracking-[-1.1664px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(174.352deg, rgb(241, 133, 0) 0%, rgb(232, 54, 45) 60%, rgb(191, 0, 255) 100%)" }}>
        ЗАДАВАЕМЫЕ
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[160.95px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[0] left-0 not-italic text-[58.32px] text-black top-[-1px] tracking-[-1.1664px] whitespace-nowrap">
          <p className="leading-[53.654px] mb-0">ЧАСТО</p>
          <p className="leading-[53.654px]">​</p>
        </div>
        <Text1 />
        <div className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[0] left-0 not-italic text-[58.32px] text-black top-[52.65px] tracking-[-1.1664px] whitespace-nowrap">
          <p className="leading-[53.654px] mb-0">​</p>
          <p className="leading-[53.654px]">ВОПРОСЫ</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <InlineContent />
        <Heading />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20.462px] relative shrink-0 w-[396.45px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[20.47px] left-0 not-italic text-[15.163px] text-black top-[0.2px] tracking-[-0.1516px] whitespace-nowrap">Как добраться до экстрим-парка «УРАМ»?</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f18500] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[17px] size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">+</p>
    </div>
  );
}

function ContainerTransform() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="absolute flex items-center justify-center left-[-7.04px] size-[48.083px] top-[-7.04px]">
          <div className="flex-none rotate-45">
            <Container6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[20px] relative size-full">
          <Text2 />
          <ContainerTransform />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return <div className="bg-[rgba(241,133,0,0.15)] h-px relative shrink-0 w-full" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-[1013.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#333] text-[15px] w-[1014px] whitespace-pre-wrap">
          <p className="leading-[26.25px] mb-0">{`Адрес: г. Казань, ул. Кремлёвская набережная, зд. 33 `}</p>
          <p className="leading-[26.25px] mb-0">{`Остановки: `}</p>
          <p className="leading-[26.25px] mb-0">{`• «Мост Миллениум»: автобусы №28, 43, 54 `}</p>
          <p className="leading-[26.25px] mb-0">{`• «ЦПКиО им Горького»: троллейбусы №3, 5, 7 и автобусы №10, 35а, 63, 70, 91 `}</p>
          <p className="leading-[26.25px] mb-0">{`• «Улица Толстого»: автобусы №22, 89, 28а `}</p>
          <p className="leading-[26.25px] mb-0">{` `}</p>
          <p className="leading-[26.25px]">Метро: Кремлёвская, Суконная Слобода, Площадь Тукая</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22px] px-[24px] relative size-full">
        <Container9 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="max-h-[400px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button />
        <Container7 />
      </div>
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20.462px] relative shrink-0 w-[303.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[20.47px] left-0 not-italic text-[15.163px] text-black top-[0.2px] tracking-[-0.1516px] whitespace-nowrap">Вход на День молодёжи платный?</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f18500] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[17px] size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">+</p>
    </div>
  );
}

function ContainerTransform1() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="absolute flex items-center justify-center left-[-7.04px] size-[48.083px] top-[-7.04px]">
          <div className="flex-none rotate-45">
            <Container11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[20px] relative size-full">
          <Text3 />
          <ContainerTransform1 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return <div className="bg-[rgba(241,133,0,0.15)] h-px relative shrink-0 w-full" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-[1013.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26.25px] not-italic relative shrink-0 text-[#333] text-[15px] w-[1014px]">{`Нет! Вход на праздник абсолютно бесплатный для всех, но по обязательной предварительной регистрации по ссылкам: https://max.ru/youthday_bot (MAX) и https://den-molodezhi-2026.timepad.ru/event/4025106/. Для участия в отдельных соревнованиях (баскетбол 3×3, воркаут и другие) потребуется дополнительная регистрация — это тоже бесплатно.`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22px] px-[24px] relative size-full">
        <Container14 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="max-h-[400px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button1 />
        <Container12 />
      </div>
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20.462px] relative shrink-0 w-[322.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[20.47px] left-0 not-italic text-[15.163px] text-black top-[0.2px] tracking-[-0.1516px] whitespace-nowrap">Для какого возраста мероприятие?</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f18500] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[17px] size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">+</p>
    </div>
  );
}

function ContainerTransform2() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="absolute flex items-center justify-center left-[-7.04px] size-[48.083px] top-[-7.04px]">
          <div className="flex-none rotate-45">
            <Container16 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[20px] relative size-full">
          <Text4 />
          <ContainerTransform2 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return <div className="bg-[rgba(241,133,0,0.15)] h-px relative shrink-0 w-full" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-[1013.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26.25px] not-italic relative shrink-0 text-[#333] text-[15px] w-[1014px]">День молодёжи для всех! Основная программа рассчитана на возраст 14-35 лет. Однако организаторы позаботились обо всех возрастах и продумали программу для каждого. Ведь молодость — это состояние души, а не цифры в паспорте.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22px] px-[24px] relative size-full">
        <Container19 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[89.5px] max-h-[400px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white h-[166.7px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button2 />
        <Container17 />
      </div>
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20.462px] relative shrink-0 w-[318.15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[20.47px] left-0 not-italic text-[15.163px] text-black top-[0.2px] tracking-[-0.1516px] whitespace-nowrap">Будут ли трансляции мероприятия?</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f18500] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[17px] size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">+</p>
    </div>
  );
}

function ContainerTransform3() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="absolute flex items-center justify-center left-[-7.04px] size-[48.083px] top-[-7.04px]">
          <div className="flex-none rotate-45">
            <Container21 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[20px] relative size-full">
          <Text5 />
          <ContainerTransform3 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return <div className="bg-[rgba(241,133,0,0.15)] h-px relative shrink-0 w-full" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-[1013.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26.25px] not-italic relative shrink-0 text-[#333] text-[15px] w-[1014px]">Трансляция не предусмотрена. Приходи и вживую посети интересующие тебя события.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22px] px-[24px] relative size-full">
        <Container24 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="max-h-[400px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button3 />
        <Container22 />
      </div>
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20.462px] relative shrink-0 w-[311.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[20.47px] left-0 not-italic text-[15.163px] text-black top-[0.2px] tracking-[-0.1516px] whitespace-nowrap">Как стать волонтёром праздника?</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#f18500] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[17px] size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">+</p>
    </div>
  );
}

function ContainerTransform4() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="absolute flex items-center justify-center left-[-7.04px] size-[48.083px] top-[-7.04px]">
          <div className="flex-none rotate-45">
            <Container26 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[20px] relative size-full">
          <Text6 />
          <ContainerTransform4 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return <div className="bg-[rgba(241,133,0,0.15)] h-px relative shrink-0 w-full" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-[1013.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26.25px] not-italic relative shrink-0 text-[#333] text-[15px] w-[1014px]">{`Заполните анкету на сайте:https://dobro.ru/event/11751333. Принимаются заявки от граждан РФ от 16 лет. Волонтёры получат фирменный мерч, питание и благодарственное письмо.`}</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22px] px-[24px] relative size-full">
        <Container29 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[89.5px] max-h-[400px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white h-[166.7px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button4 />
        <Container27 />
      </div>
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20.462px] relative shrink-0 w-[353.087px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[20.47px] left-0 not-italic text-[15.163px] text-black top-[0.2px] tracking-[-0.1516px] whitespace-nowrap">Как принять участие в соревнованиях?</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#f18500] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[17px] size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">+</p>
    </div>
  );
}

function ContainerTransform5() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="absolute flex items-center justify-center left-[-7.04px] size-[48.083px] top-[-7.04px]">
          <div className="flex-none rotate-45">
            <Container31 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[20px] relative size-full">
          <Text7 />
          <ContainerTransform5 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return <div className="bg-[rgba(241,133,0,0.15)] h-px relative shrink-0 w-full" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-[1013.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26.25px] not-italic relative shrink-0 text-[#333] text-[15px] w-[1014px]">Зарегистрируйтесь в отдельных ссылках, прикрепленных в программе направления «Спорт».</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22px] px-[24px] relative size-full">
        <Container34 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="max-h-[400px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button5 />
        <Container32 />
      </div>
      <div aria-hidden className="absolute border-[#f18500] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[1065px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[52px] relative size-full">
        <Container5 />
        <Container10 />
        <Container15 />
        <Container20 />
        <Container25 />
        <Container30 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[63px] relative shrink-0 w-[1065px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:SemiBold',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#666] text-[0px] whitespace-nowrap">
          <p className="leading-[22.4px] mb-0 text-[14px] whitespace-pre">Не нашли ответ? Напишите нам в социальные сети фестиваля День молодёжи в РТ:</p>
          <p className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[22.4px] mb-0 text-[#e8362d] text-[14px] whitespace-pre">{`Telegram: t.me/dmtatarstan `}</p>
          <p className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[22.4px] text-[#e8362d] text-[14px] whitespace-pre">ВКонтакте: vk.com/molodtatarstan</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Container1 />
        <Container4 />
        <Container35 />
      </div>
    </div>
  );
}

function Container36() {
  return <div className="absolute h-[1666px] left-0 top-0 w-[6px]" style={{ backgroundImage: "linear-gradient(rgb(191, 0, 255) 0%, rgb(232, 54, 45) 33.333%, rgb(241, 133, 0) 66.667%, rgb(255, 223, 0) 100%)" }} data-name="Container" />;
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[48px] py-[100px] relative size-full" data-name="Вопросы">
      <Container />
      <Container36 />
    </div>
  );
}