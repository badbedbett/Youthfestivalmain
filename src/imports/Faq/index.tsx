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
    <div className="relative rounded-[17px] shrink-0 size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(241,133,0,0.3)] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#f18500] text-[18px] whitespace-nowrap">+</p>
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
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f5f5f5] h-[77.2px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
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

function Container8() {
  return (
    <div className="relative rounded-[17px] shrink-0 size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(241,133,0,0.3)] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#f18500] text-[18px] whitespace-nowrap">+</p>
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
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f5f5f5] h-[77.2px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button1 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
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

function Container10() {
  return (
    <div className="relative rounded-[17px] shrink-0 size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(241,133,0,0.3)] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#f18500] text-[18px] whitespace-nowrap">+</p>
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
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f5f5f5] h-[77.2px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button2 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
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

function Container12() {
  return (
    <div className="relative rounded-[17px] shrink-0 size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(241,133,0,0.3)] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#f18500] text-[18px] whitespace-nowrap">+</p>
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
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f5f5f5] h-[77.2px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button3 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
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

function Container14() {
  return (
    <div className="relative rounded-[17px] shrink-0 size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(241,133,0,0.3)] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#f18500] text-[18px] whitespace-nowrap">+</p>
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
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f5f5f5] h-[77.2px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button4 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20.462px] relative shrink-0 w-[169.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[20.47px] left-0 not-italic text-[15.163px] text-black top-[0.2px] tracking-[-0.1516px] whitespace-nowrap">Что взять с собой?</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative rounded-[17px] shrink-0 size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(241,133,0,0.3)] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#f18500] text-[18px] whitespace-nowrap">+</p>
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
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f5f5f5] h-[77.2px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button5 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20.462px] relative shrink-0 w-[353.087px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[20.47px] left-0 not-italic text-[15.163px] text-black top-[0.2px] tracking-[-0.1516px] whitespace-nowrap">Как принять участие в соревнованиях?</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative rounded-[17px] shrink-0 size-[34px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(241,133,0,0.3)] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#f18500] text-[18px] whitespace-nowrap">+</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[20px] relative size-full">
          <Text8 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f5f5f5] h-[77.2px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">
        <Button6 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[640.4px] relative shrink-0 w-[1065px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[52px] relative size-full">
        <Container5 />
        <Container7 />
        <Container9 />
        <Container11 />
        <Container13 />
        <Container15 />
        <Container17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[63px] relative shrink-0 w-[1065px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#666] text-[0px] whitespace-nowrap">
          <p className="leading-[22.4px] mb-0 text-[14px] whitespace-pre">Не нашли ответ? Напишите нам в социальные сети фестиваля День молодёжи в РТ:</p>
          <p className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[22.4px] mb-0 text-[#e8362d] text-[14px] whitespace-pre">{`Telegram: t.me/dmtatarstan `}</p>
          <p className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[22.4px] text-[#e8362d] text-[14px] whitespace-pre">ВКонтакте: vk.com/molodtatarstan</p>
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
        <Container19 />
      </div>
    </div>
  );
}

function Container20() {
  return <div className="absolute h-[1106.35px] left-0 top-0 w-[6px]" style={{ backgroundImage: "linear-gradient(rgb(191, 0, 255) 0%, rgb(232, 54, 45) 33.333%, rgb(241, 133, 0) 66.667%, rgb(255, 223, 0) 100%)" }} data-name="Container" />;
}

export default function Faq() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[48px] py-[100px] relative size-full" data-name="FAQ">
      <Container />
      <Container20 />
    </div>
  );
}