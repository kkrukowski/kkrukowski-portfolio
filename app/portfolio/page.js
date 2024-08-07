'use client'

import MainSubpageVideo from "@/components/MainSubpageVideo";
import TextBox from "@/components/TextBox";
import Heading from "@/components/Heading";
import Image from "next/image";
import PortfolioItem from "@/components/Portfolio/PortfolioItem";
import useNavStore from "@/app/store";

export default function Portfolio() {
    const updateMenuIndex = useNavStore((state) => state.updateMenuIndex);
    updateMenuIndex(1)

  return (
      <main className="w-screen max-w-[1250px] min-h-screen px-4 sm:px-12 desktop:px-24 pt-[90px] sm:pt-[110px]">
          <MainSubpageVideo videoUrl={"/videos/dji-offer-video.webm"} subpageTitle="Portfolio"/>
          <div className={`mb-[50px]`}>
              <TextBox width="full"
                       text="Zapraszam do zapoznania się z moim portfolio, które prezentuje profesjonalne filmowanie z drona FPV oraz produkcję filmów reklamowych. Obejrzyj przykłady dynamicznych nagrań i innowacyjnych ujęć, które wyróżniają moją pracę na tle konkurencji."/>
          </div>
          <div className={`relative mb-[50px]`}>
              <Heading text={"Moje wcześniejsze realizacje"}/>
              {/*<Image src={"/images/underlines/long.svg"} width={150} height={8} alt={"Underline"}*/}
              {/*       className={`absolute translate-x-[275px]`}/>*/}
          </div>
          <div className={`flex flex-col relative w-full`}>
              <div className={`flex flex-col md:flex-row w-full md:mb-[50px]`}>
                  <PortfolioItem
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
                  <PortfolioItem marginLeft="true"
                                 desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
              </div>
              <div className={`flex relative w-full flex-col md:flex-row md:justify-end md:mb-[50px]`}>
                  <PortfolioItem
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
                  <PortfolioItem marginLeft="true"
                                 desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
              </div>
              <div className={`flex flex-col md:flex-row w-full md:mb-[50px]`}>
                  <PortfolioItem
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
                  <PortfolioItem marginLeft="true"
                                 desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
              </div>
          </div>
      </main>
  );
}
