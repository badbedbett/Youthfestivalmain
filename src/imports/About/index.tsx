function Container() {
  return <div className="absolute h-[5px] left-0 top-0 w-[1160.8px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(191, 0, 255) 0%, rgb(232, 54, 45) 33.333%, rgb(241, 133, 0) 66.667%, rgb(255, 223, 0) 100%)" }} data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[257px] left-[330.18px] top-[266.43px] w-[842px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[256.608px] left-[-0.23px] not-italic text-[256.608px] text-[rgba(241,133,0,0.05)] top-[0.19px] tracking-[-10.2643px] whitespace-nowrap">2026</p>
    </div>
  );
}

function Container6() {
  return <div className="bg-gradient-to-r from-[#e8362d] h-[4px] relative rounded-[2px] shrink-0 to-[#f18500] w-[36px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[18px] relative shrink-0 w-[91.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[#e8362d] text-[12px] top-[-0.2px] tracking-[1.8px] uppercase whitespace-nowrap">О СОБЫТИИ</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[6.6px]" data-name="Container">
      <Container6 />
      <Text />
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[42.6px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[59.013px] left-0 top-[118.03px] w-[458.95px]" data-name="Text">
      <p className="[word-break:break-word] absolute bg-clip-text font-['Dela_Gothic_One:Regular',sans-serif] leading-[59.02px] left-0 not-italic text-[64.152px] text-[transparent] top-[-0.6px] tracking-[-1.283px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(172.585deg, rgb(191, 0, 255) 0%, rgb(232, 54, 45) 40%, rgb(241, 133, 0) 70%, rgb(255, 223, 0) 100%)" }}>
        ПРАЗДНИК
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[177.038px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[0] left-0 not-italic text-[64.152px] text-black top-[-0.6px] tracking-[-1.283px] whitespace-nowrap">
          <p className="leading-[59.02px] mb-0">ГЛАВНЫЙ</p>
          <p className="leading-[59.02px] mb-0">МОЛОДЁЖНЫЙ</p>
          <p className="leading-[59.02px]">​</p>
        </div>
        <Text1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[614.9px]" data-name="Container">
      <InlineContent />
      <Heading />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#333] text-[0px] w-[386px]">
          <span className="leading-[30.618px] text-[17.496px]">{`27 июня 2026 года Казань принимает Всероссийский День молодёжи в экстрим-парке «УРАМ». `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[30.618px] text-[#e8362d] text-[17.496px]">Один день — тысячи возможностей.</span>
          <span className="leading-[30.618px] text-[17.496px]">{` Это главный молодёжный праздник страны, который объединяет самых активных, смелых и творческих людей России.`}</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-[385.9px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[22px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[25.777px] not-italic relative shrink-0 text-[#666] text-[15.163px] w-[386px]">8 тематических площадок, звёздные спикеры, соревнования мирового уровня, мастер-классы и большой концерт на главной сцене — всё это в одном месте, в один незабываемый день.</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-[385.9px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Italic',sans-serif] font-normal italic leading-[22.4px] relative shrink-0 text-[#e8362d] text-[14px] w-[386px]">Концепция празднования Дня молодёжи в 2026 году — «Мечта. Гордость. Единство».</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[678.9px] top-0 w-[385.9px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[400.275px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container4 />
        <Container7 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[34.992px] not-italic relative shrink-0 text-[#e8362d] text-[34.992px] tracking-[-0.6998px] whitespace-nowrap">27 ИЮНЯ</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[29px] relative shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18.2px] not-italic relative shrink-0 text-[#666] text-[13px] tracking-[1.04px] uppercase whitespace-nowrap">дата праздника</p>
      </div>
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#e8362d] h-[4px] left-[1.6px] rounded-tl-[14px] rounded-tr-[14px] top-[1.6px] w-[251px]" data-name="Container" />;
}

function Container9() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[130.387px] left-0 rounded-[16px] top-0 w-[254.2px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[29.6px] py-[33.6px] relative rounded-[inherit] size-full">
        <Container10 />
        <Container11 />
        <Container12 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.13)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Dela_Gothic_One:Regular',sans-serif] leading-[34.992px] not-italic relative shrink-0 text-[#f18500] text-[34.992px] tracking-[-0.6998px] whitespace-nowrap">100 000+</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[29px] relative shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18.2px] not-italic relative shrink-0 text-[#666] text-[13px] tracking-[1.04px] uppercase whitespace-nowrap">участников</p>
      </div>
    </div>
  );
}

function Container16() {
  return <div className="absolute bg-[#f18500] h-[4px] left-[1.6px] rounded-tl-[14px] rounded-tr-[14px] top-[1.6px] w-[251px]" data-name="Container" />;
}

function Container13() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[130.387px] left-[270.2px] rounded-[16px] top-0 w-[254.2px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[29.6px] py-[33.6px] relative rounded-[inherit] size-full">
        <Container14 />
        <Container15 />
        <Container16 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(241,133,0,0.13)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[35px] relative shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[34.992px] left-0 not-italic text-[#bf00ff] text-[34.992px] top-[-0.69px] tracking-[-0.6998px] whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[18px] relative shrink-0 w-[195px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.2px] left-0 not-italic text-[#666] text-[13px] top-[-0.3px] tracking-[1.04px] uppercase whitespace-nowrap">направлений</p>
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[#bf00ff] h-[4px] left-[1.5px] rounded-tl-[14px] rounded-tr-[14px] top-[1.41px] w-[251px]" data-name="Container" />;
}

function Container17() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[130px] left-[540.5px] rounded-[16px] top-[0.19px] w-[254px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[29.6px] py-[33.6px] relative rounded-[inherit] size-full">
        <Container18 />
        <ContainerMargin1 />
        <Container20 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(191,0,255,0.13)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[35px] relative shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular',sans-serif] leading-[34.992px] left-0 not-italic text-[#e8362d] text-[34.992px] top-[-0.69px] tracking-[-0.6998px] whitespace-nowrap">КАЗАНЬ</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[18px] relative shrink-0 w-[195px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.2px] left-0 not-italic text-[#666] text-[13px] top-[-0.3px] tracking-[1.04px] uppercase whitespace-nowrap">экстрим-парк «УРАМ»</p>
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-[#e8362d] h-[4px] left-[1.5px] rounded-tl-[14px] rounded-tr-[14px] top-[1.41px] w-[251px]" data-name="Container" />;
}

function Container21() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[130px] left-[810.7px] rounded-[16px] top-[0.19px] w-[254px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[29.6px] py-[33.6px] relative rounded-[inherit] size-full">
        <Container22 />
        <ContainerMargin2 />
        <Container24 />
      </div>
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(232,54,45,0.13)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[130.387px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container13 />
      <Container17 />
      <Container21 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[80px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] max-w-[1280px] top-[119.6px] w-[1064.8px]" data-name="Container">
      <Container3 />
      <ContainerMargin />
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white relative size-full" data-name="About">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}