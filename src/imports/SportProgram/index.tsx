function Container4() {
  return <div className="bg-gradient-to-r from-[#e8362d] h-[4px] relative rounded-[2px] shrink-0 to-[#f18500] w-[36px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[18px] relative shrink-0 w-[193.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[#e8362d] text-[12px] top-[-0.2px] tracking-[1.8px] uppercase whitespace-nowrap">Детальная программа</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[6.6px]" data-name="Container">
      <Container4 />
      <Text />
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[40.6px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[62.987px] left-0 top-0 w-[317.038px]" data-name="Text">
      <p className="[word-break:break-word] absolute bg-clip-text font-['Dela_Gothic_One:Regular',sans-serif] leading-[62.986px] left-0 not-italic text-[69.984px] text-[transparent] top-[-0.2px] tracking-[-1.3997px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(168.828deg, rgb(232, 54, 45) 0%, rgb(241, 133, 0) 55%, rgb(255, 223, 0) 100%)" }}>
        СПОРТ
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[62.987px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[512.4px]" data-name="Container">
      <InlineContent />
      <Heading />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[43.74px] not-italic relative shrink-0 text-[29.16px] text-[rgba(232,54,45,0.15)] tracking-[1.458px] whitespace-nowrap">10:00 – 19:00</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[32px] relative shrink-0 w-[512.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#666] text-[15px] whitespace-nowrap">Экстрим-парк «УРАМ» · Кремлёвская набережная, 33</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[552.4px] top-[27.85px] w-[512.4px]" data-name="Container">
      <Container6 />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[103.588px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container5 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] whitespace-nowrap">Серия открытых тренировок от студии фитнеса, йоги, растяжки и танцев «Яратам»</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">Площадка ЗОЖ</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[824.638px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[21px] left-[866.64px] top-[33.35px] w-[116.963px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">10:00 – 14:00</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] whitespace-nowrap">Соревнования и мастер-классы по BMX</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">Эир-парк</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[825.9px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[21px] left-[867.9px] top-[33.35px] w-[115.7px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">12:00 – 19:00</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container13 />
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button1 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] whitespace-nowrap">Соревнования и мастер-классы по самокату</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">Эир-парк</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[825.9px]" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[21px] left-[867.9px] top-[33.35px] w-[115.7px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">12:00 – 19:00</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container17 />
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button2 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] whitespace-nowrap">Соревнования и мастер-классы по воркауту</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">Воркаут-площадка</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[825.9px]" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[21px] left-[867.9px] top-[33.35px] w-[115.7px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">12:00 – 19:00</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button3 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] whitespace-nowrap">Соревнования и мастер-класс по паркуру</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">Площадка для паркура</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[825.9px]" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[21px] left-[867.9px] top-[33.35px] w-[115.7px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">12:00 – 19:00</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container25 />
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button4 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] whitespace-nowrap">Танцевальная площадка</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] w-[364px]">Бетонная площадка со стороны лектория</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[824.838px]" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[21px] left-[866.84px] top-[33.35px] w-[116.763px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">13:00 – 18:00</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container29 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button5 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] whitespace-nowrap">Медиатурнир по баскетболу 3х3 при поддержке Билайна</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">Стритбольные поля</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[824.838px]" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[21px] left-[866.84px] top-[33.35px] w-[116.763px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">13:00 – 18:00</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container33 />
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button6 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] whitespace-pre">{`Соревнования  по роликам`}</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">Боул / Стрит-плаза</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[824.4px]" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[21px] left-[866.4px] top-[33.35px] w-[117.2px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">14:00 – 15:00</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container37 />
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button7 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] whitespace-nowrap">Турнир по бразильскому джиу-джитсу</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">Площадка ЗОЖ</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[824.513px]" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[21px] left-[866.51px] top-[33.35px] w-[117.088px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">14:00 – 18:00</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container41 />
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button8 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] whitespace-nowrap">Соревнования по BMX — Стрит</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">Стрит-плаза</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[826.463px]" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[21px] left-[868.46px] top-[33.35px] w-[115.138px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">15:00 – 17:00</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container45 />
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button9 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] w-[457px]">Активности от партнёра Билайн</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] w-[364px]">Стрит-плаза, бетонная сцена</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[825.9px]" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[21px] left-[867.9px] top-[33.35px] w-[115.7px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">12:00 – 19:00</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container49 />
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button10 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] w-[457px]">Соревнования по баскетболу 3х3</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] w-[364px]">Стритбольные поля</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[825.9px]" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[21px] left-[867.9px] top-[33.35px] w-[115.7px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">10:00 – 12:00</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container53 />
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button11 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] w-[457px]">Мастер-класс по игре на Ханге</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">Площадка ЗОЖ</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[825.9px]" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[21px] left-[867.9px] top-[33.35px] w-[115.7px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">11:00 – 12:00</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container57 />
        <Container58 />
        <Container59 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button12 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[21.229px] not-italic relative shrink-0 text-[16.33px] text-black tracking-[-0.1633px] w-[457px]">Показательные выступления по Ушу</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">Площадка ЗОЖ</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[26px] top-[22px] w-[782.888px]" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[21px] left-[824.89px] top-[33.35px] w-[158.713px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#e8362d] text-[14px] top-[-1px] tracking-[0.28px] whitespace-nowrap">Время уточняется</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[999.6px] p-[1.6px] rounded-[18px] size-[36px] top-[25.85px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e8362d] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[87.713px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container61 />
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#f5f5f5] h-[90.912px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button13 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[1431px] relative shrink-0 w-[1065px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[56px] relative size-full">
        <Container8 />
        <Container12 />
        <Container16 />
        <Container20 />
        <Container24 />
        <Container28 />
        <Container32 />
        <Container36 />
        <Container40 />
        <Container44 />
        <Container48 />
        <Container52 />
        <Container56 />
        <Container60 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Container1 />
        <Container7 />
      </div>
    </div>
  );
}

function Container64() {
  return <div className="absolute bg-gradient-to-b from-[#e8362d] h-[1734px] left-0 to-[#ffdf00] top-[0.34px] via-1/2 via-[#f18500] w-[6px]" data-name="Container" />;
}

export default function SportProgram() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[48px] py-[100px] relative size-full" data-name="SportProgram">
      <Container />
      <Container64 />
    </div>
  );
}