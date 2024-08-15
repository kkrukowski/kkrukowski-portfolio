'use client'

import Image from "next/image";
import MainSubpageVideo from "@/components/MainSubpageVideo";
import TextBox from "@/components/TextBox";
import Heading from "@/components/Heading";
import OfferItem from "@/components/Home/OfferItem";
import useNavStore from "@/app/store";
import OfferImageItem from "@/app/components/Home/OfferImageItem";
import LinkButton from "@/app/components/LinkButton";

export default function Uslugi() {
    const updateMenuIndex = useNavStore((state) => state.updateMenuIndex);
    updateMenuIndex(2)

    return (
        <main className="flex flex-col items-center w-screen max-w-[1250px] min-h-screen px-4 sm:px-12 desktop:px-24 pt-[90px] sm:pt-[110px]">
            <MainSubpageVideo videoUrl="/videos/offers-video.webm"
                              subpageTitle="Usługi"/>
            <div className={`mb-[50px]`}>
                <TextBox width="full"
                         text="Oferuję szeroki zakres usług związanych z profesjonalnym filmowaniem z drona, w tym dynamiczne nagrania FPV i produkcję filmów reklamowych. Zapewniam najwyższą jakość wideo, innowacyjne ujęcia oraz indywidualne podejście do każdego projektu, aby sprostać Twoim potrzebom."/>
            </div>
            <div className={`relative mb-[50px]`}>
                <Heading text={"Usługi które mogę dla Ciebie wykonać"}/>
                {/*<Image src={"/images/underlines/long.svg"} width={150} height={8} alt={"Underline"}*/}
                {/*       className={`absolute translate-x-[275px]`}/>*/}
            </div>
            <section className={`mb-[50px] relative`}>
                <div>
                    <OfferItem text="Zyskaj wyjątkowe ujęcia Twojego wydarzenia, nieruchomości lub projektu dzięki profesjonalnemu filmowaniu z drona. Moje nagrania wyróżnią Twój projekt, przyciągając uwagę i podnosząc jego prestiż. Gwarantuję najwyższą jakość obrazu, która spełni Twoje oczekiwania."
                               title="Filmowanie z powietrza"
                               href={"/"}
                               src="/videos/dji-offer-video.webm"
                               alt="Przykładowy film z drona"
                               reverse={false}
                    />
                    <OfferItem text="Przyciągnij uwagę odbiorców dzięki dynamicznym nagraniom FPV, które dodadzą energii i wyjątkowości Twoim filmom promocyjnym lub sportowym. Nowatorskie ujęcia z dronów wyścigowych sprawią, że Twoje materiały wideo staną się niezapomniane. Postaw na unikalność, która wyróżni Twoją markę na rynku."
                               title="Dynamiczne nagrania FPV"
                               href={"/"}
                               src="/videos/fpv-offer-video.webm"
                               alt="Przykładowy film z drona"
                               reverse={true}
                    />
                    <OfferItem text="Uzyskaj perfekcyjnie zmontowane filmy dronowe, które zachwycą Twoich odbiorców. Profesjonalny montaż, w tym efekty specjalne i dopasowana muzyka, sprawi, że Twoje materiały wideo będą gotowe do skutecznej prezentacji. Skorzystaj z usług, które podniosą jakość Twojej produkcji."
                               title="Montaż filmów dronowych"
                               href={"/"}
                               src="/videos/montage-offer-video.webm"
                               alt="Przykładowy film z drona"
                               reverse={false}
                    />
                    <OfferImageItem text="Wznieś swoją promocję na wyższy poziom dzięki profesjonalnym zdjęciom z drona. Moje fotografie z lotu ptaka podkreślą piękno krajobrazów i architektury, przyciągając uwagę i zachwycając odbiorców. Dzięki wyjątkowym ujęciom, Twoje projekty zyskają nowy wymiar."
                                    title="Fotografia z drona"
                                    href={"/"}
                                    src="/images/promo-drone-photo.webp"
                                    alt="Przykładowy film z drona"
                                    reverse={true}
                    />
                </div>
                {/*<div*/}
                {/*    className={`absolute w-[250px] h-[250px] top-1/2 left-[800px] rotate-12 -z-50 opacity-50`}>*/}
                {/*    <Image src={"/images/logo-dark.webp"} alt={"Logo"} layout="fill"*/}
                {/*           className={`relative object-contain w-full h-full`}/>*/}
                {/*</div>*/}
            </section>
            <div className="flex flex-col items-center mt-2 mb-8">
                <p className="mb-4">Potrzebujesz wykonać którąś z powyższych usług?</p>
                <LinkButton href="/kontakt"
                            text="Skontaktuj się ze mną!"/>
            </div>
        </main>
    );
}
