'use client'

import Subheading from "@/components/Subheading";
import MainSubpageVideo from "@/components/MainSubpageVideo";
import TextBox from "@/components/TextBox";
import Heading from "@/components/Heading";
import Image from "next/image";
import PortfolioItem from "@/components/Portfolio/PortfolioItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/components/Form/ContactForm";
import useNavStore from "@/app/store";
import ContactSection from "@/app/components/Contact/ContactSection";

export default function Kontakt() {
    const updateMenuIndex = useNavStore((state) => state.updateMenuIndex);
    updateMenuIndex(3)

    return (
        <main className="w-screen max-w-[1250px] min-h-screen px-4 sm:px-12 desktop:px-24 pt-[90px] sm:pt-[110px]">
            <MainSubpageVideo
                videoUrl="/videos/contact-video.webm"
                subpageTitle="Kontakt"/>
            <div className={`mb-[50px]`}>
                <TextBox width="full"
                         text="Jeśli masz pytania lub chciałbyś omówić szczegóły swojego projektu, zapraszam do kontaktu. Z przyjemnością odpowiem na wszelkie wątpliwości i doradzę najlepsze rozwiązania dla Twoich potrzeb. Wspólnie stworzymy wyjątkowe materiały wideo, które wyróżnią Twoją markę."/>
            </div>
            {/* Contact me section */}
            <ContactSection/>
        </main>
    );
}
