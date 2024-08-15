'use client'

import MainSubpageVideo from "@/components/MainSubpageVideo";
import TextBox from "@/components/TextBox";
import Heading from "@/components/Heading";
import Image from "next/image";
import PortfolioItem from "@/components/Portfolio/PortfolioItem";
import useNavStore from "@/app/store";
import LinkButton from "@/app/components/LinkButton";

export default function Portfolio() {
    const updateMenuIndex = useNavStore((state) => state.updateMenuIndex);
    updateMenuIndex(1)

  return (
      <main className="flex flex-col items-center w-screen max-w-[1250px] min-h-screen px-4 sm:px-12 desktop:px-24 pt-[90px] sm:pt-[110px]">
          <MainSubpageVideo videoUrl={"/videos/portfolio-video.webm"} subpageTitle="Portfolio"/>
          <div className={`mb-[50px]`}>
              <TextBox width="full"
                       text="Zapraszam do zapoznania się z moim portfolio, które prezentuje profesjonalne filmowanie z drona FPV oraz produkcję filmów reklamowych. Obejrzyj przykłady dynamicznych nagrań i innowacyjnych ujęć, które wyróżniają moją pracę na tle konkurencji."/>
          </div>
          <div className={`relative mb-[50px]`}>
              <Heading text={"Realizacje które mogą Ciebie zainteresować"}/>
              {/*<Image src={"/images/underlines/long.svg"} width={150} height={8} alt={"Underline"}*/}
              {/*       className={`absolute translate-x-[275px]`}/>*/}
          </div>
          <div className={`flex flex-col relative w-full`}>
              <div className={`flex flex-col md:flex-row w-full md:mb-[50px]`}>
                  <PortfolioItem
                      videoUrl="https://d1gxekubn1rt9f.cloudfront.net/Showreel%202024.mp4"
                      desc="Montaż najciekawszych ujęć z klasycznego drona i drona FPV, które razem tworzą spójną i efektowną całość."/>
                  <PortfolioItem
                      marginLeft="true"
                      videoUrl="https://d1gxekubn1rt9f.cloudfront.net/cementownia-fpv-inside.webm"
                      desc="Przelot dronem FPV w starej opuszczonej i klimatycznej cementowni, który uchwycił unikalne ujęcia podkreślające surową atmosferę miejsca."/>
                  </div>
              <div className={`flex relative w-full flex-col md:flex-row md:justify-end md:mb-[50px]`}>
                  <PortfolioItem
                      videoUrl="https://d1gxekubn1rt9f.cloudfront.net/FPV_Czech_4K.mp4"
                      desc="Innowacyjny i dynamiczny lot dronem FPV przez biurowiec nocą, zakończony efektownym wylotem przez okno."/>
                  <PortfolioItem
                      marginLeft="true"
                      videoUrl="https://d1gxekubn1rt9f.cloudfront.net/FPV_Cementownia_03_03.mp4"
                      desc="Lot dronem FPV nad starą, opuszczoną zabudową, ukazujący ogrom i wyjątkowy charakter całej konstrukcji."/>
                  </div>
          </div>
          <div className="mt-2 mb-8">
              <LinkButton
                  href="https://www.youtube.com/playlist?list=PLDsHs9Rba7ihvKFWYUDqnbC2z6l2D7R5_"
                  target="_blank"
                  text="Zobacz więcej ujęć"
              />          </div>
      </main>
  );
}
