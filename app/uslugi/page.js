import Subheading from "@/components/Subheading";
import Image from "next/image";
import MainSubpageVideo from "@/components/MainSubpageVideo";
import TextBox from "@/components/TextBox";
import Heading from "@/components/Heading";
import OfferItem from "@/components/Home/OfferItem";

export default function Uslugi() {
    return (
        <main className="flex xl:w-[1250px] max-w-[1250px] min-h-screen flex-col items-center p-24">
            <MainSubpageVideo subpageTitle="Usługi"/>
            <div className={`mb-[50px]`}>
                <TextBox width="full"
                         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc. Nullam elementum quam sem, quis lacinia odio bibendum eget. "/>
            </div>
            <div className={`relative mb-[50px]`}>
                <Heading text={"Moje wcześniejsze realizacje"}/>
                <Image src={"/images/underlines/long.svg"} width={150} height={8} alt={"Underline"}
                       className={`absolute translate-x-[275px]`}/>
            </div>
            <section className={`mb-[100px] relative`}>
                <div>
                    <OfferItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
                        bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc. Nullam
                        elementum quam sem, quis lacinia odio bibendum eget. In venenatis arcu a nibh laoreet tincidunt."
                               src="/images/placeholer-video.png"
                               alt="Offer video example"
                               reverse={false}
                    />
                    <OfferItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
                        bibendum magtna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc. Nullam
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
                <div
                    className={`absolute w-[250px] h-[250px] top-1/2 left-[800px] rotate-12 -z-50 opacity-50`}>
                    <Image src={"/images/logo-dark.png"} alt={"Logo"} layout="fill"
                           className={`relative object-contain w-full h-full`}/>
                </div>
            </section>
        </main>
    );
}
