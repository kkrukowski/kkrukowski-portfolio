import Subheading from "@/components/Subheading";
import MainSubpageVideo from "@/components/MainSubpageVideo";
import TextBox from "@/components/TextBox";
import Heading from "@/components/Heading";
import Image from "next/image";
import PortfolioItem from "@/components/Portfolio/PortfolioItem";

export default function Portfolio() {
  return (
      <main className="flex xl:w-[1250px] max-w-[1250px] min-h-screen flex-col items-center p-24">
          <MainSubpageVideo subpageTitle="Portfolio"/>
          <div className={`mb-[50px]`}>
              <TextBox width="full"
                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc. Nullam elementum quam sem, quis lacinia odio bibendum eget. "/>
          </div>
          <div className={`relative mb-[50px]`}>
              <Heading text={"Moje wcześniejsze realizacje"}/>
              <Image src={"/images/underlines/long.svg"} width={150} height={8} alt={"Underline"}
                     className={`absolute translate-x-[275px]`}/>
          </div>
          <div className={`flex flex-col relative w-full`}>
              <div className={`flex justify-between w-[950px] mb-[50px]`}>
                  <PortfolioItem
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
                  <PortfolioItem
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
              </div>
              <div className={`relative flex justify-between w-[950px] self-end mb-[50px]`}>
                  <PortfolioItem
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
                  <PortfolioItem
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
              </div>
              <div className={`flex justify-between w-[950px] mb-[50px]`}>
                  <PortfolioItem
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
                  <PortfolioItem
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc."/>
              </div>
          </div>
      </main>
  );
}
