import Image from "next/image";

import Subheading from "@/components/Subheading";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <main className="flex max-w-[1000px] min-h-screen flex-col items-center pb-24 px-24 justify-between">

        {/* Hero section */}
        <section className={`relative flex flex-col items-center h-screen pt-[150px] mb-24`}>
            <Subheading text={"👋, jestem Kamil i jestem pilotem dronów."}/>
            <div className={`absolute z-40 top-1/4 w-screen flex flex-col items-center`}>
                <p className={`text-dark font-bold text-[220px] font-outline-2 leading-none`}>Pilot drona</p>
                <p className={`text-light font-bold text-[220px] font-outline-2`}>& Montażysta</p>
            </div>
            <div className={`relative z-40 mt-auto`}>
            <Image src="/images/profile-nobg.png" alt="Kamil Krukowski" width={650} height={650}/>
            </div>
            <div className={`absolute bottom-0 z-40 mt-auto bg-gradient-to-t from-light w-full h-[400px]`}></div>
        </section>

        {/* About me section */}
        <section>
            <Heading text={"Krótko o mnie"}/>
            <div className={`flex`}>
                <div className={`rounded-2xl bg-dark p-8 w-[500px]`}>
                    <p className={`text-light`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
                        bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc. Nullam
                        elementum quam sem, quis lacinia odio bibendum eget. In venenatis arcu a nibh laoreet tincidunt.
                        In vel augue aliquet, mollis elit sed, iaculis tellus. Vestibulum ultrices non ipsum nec
                        iaculis. Suspendisse venenatis sapien nec auctor ultrices. Sed condimentum felis faucibus sapien
                        facilisis tincidunt.</p>
                </div>
                <Image src={"/images/kkrukowski-fpv.png"} alt={"Kamil Krukowski"} width={300} height={300} className={`bg-primary rounded-2xl ml-[50px]`} />
            </div>
        </section>
    </main>
  );
}
