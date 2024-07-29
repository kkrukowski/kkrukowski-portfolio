import Image from "next/image";

import Subheading from "@/components/Subheading";
import Heading from "@/components/Heading";
import TextBox from "@/components/TextBox";
import OfferItem from "@/components/Home/OfferItem";

export default function Home() {
  return (
    <main className="flex max-w-[1250px] min-h-screen flex-col items-center pb-24 px-24 justify-between">
        {/* Hero section */}
        <section className={`relative flex flex-col items-center min-h-[600px] h-screen pt-[150px] mb-24 sm-h:mb-48 md-h:mb-[280px] lg-h:mb-[220px] xl-h:mb-[100px]`}>
            <Subheading text={"👋, jestem Kamil i jestem pilotem dronów."}/>
            <div className={`absolute z-40 top-1/3 w-screen flex flex-col items-center`}>
                <p className={`text-dark font-bold text-[60px] sm:text-[90px] md:text-[110px] lg:text-[150px] xl:text-[190px] 2xl:text-[220px] font-outline-2 leading-[10rem]`}>Pilot drona</p>
                <p className={`text-light font-bold text-[60px] sm:text-[90px] md:text-[110px] lg:text-[150px] xl:text-[190px] 2xl:text-[220px] font-outline-2`}>& Montażysta</p>
            </div>
            <div className={`relative z-40 mt-auto w-screen`}>
                <div className={`relative bottom-0 w-full h-[450px] mt-28 md-h:h-[550px] lg-h:h-[600px] lg-h:mt-48`}>
                    <Image src="/images/profile-nobg.png" alt="Kamil Krukowski" layout="fill"
                           className={`relative object-contain w-full h-full`}/>
                </div>
                <div className={`absolute bottom-0 z-40 mt-auto bg-gradient-to-t from-light w-full h-[300px]`}></div>
            </div>
        </section>

        {/* About me section */}
        <section className={`mb-[100px]`}>
            <div className={`mb-[50px]`}>
                <Heading text={"Krótko o mnie"}/>
            </div>
            <div className={`flex`}>
                <TextBox text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
                            bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc. Nullam
                            elementum quam sem, quis lacinia odio bibendum eget. In venenatis arcu a nibh laoreet tincidunt.
                            In vel augue aliquet, mollis elit sed, iaculis tellus. Vestibulum ultrices non ipsum nec
                            iaculis. Suspendisse venenatis sapien nec auctor ultrices. Sed condimentum felis faucibus sapien
                            facilisis tincidunt."/>
                <Image src={"/images/kkrukowski-fpv.png"} alt={"Kamil Krukowski"} width={300} height={300}
                       className={`bg-primary rounded-2xl ml-[50px] shadow-lg`}/>
            </div>
        </section>

        {/* Offer section */}
        <section>
            <div className={`relative mb-[50px]`}>
                <Heading text={"Co mogę Ci zapewnić?"}/>
                <Image src={"/images/underlines/short.svg"} width={30} height={3} alt={"Underline"} className={`absolute translate-x-[375px]`} />
            </div>
            <div>
                <OfferItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
                            bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc. Nullam
                            elementum quam sem, quis lacinia odio bibendum eget. In venenatis arcu a nibh laoreet tincidunt."
                           src="/images/placeholer-video.png"
                           alt="Offer video example"
                           reverse={false}
                />
                <OfferItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
                            bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc. Nullam
                            elementum quam sem, quis lacinia odio bibendum eget. In venenatis arcu a nibh laoreet tincidunt."
                           src="/images/placeholer-video.png"
                           alt="Offer video example"
                           reverse={true}
                />
                <OfferItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
                            bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc. Nullam
                            elementum quam sem, quis lacinia odio bibendum eget. In venenatis arcu a nibh laoreet tincidunt."
                           src="/images/placeholer-video.png"
                           alt="Offer video example"
                           reverse={false}
                />
            </div>
        </section>
    </main>
  );
}
