import Subheading from "@/components/Subheading";
import MainSubpageVideo from "@/components/MainSubpageVideo";
import TextBox from "@/components/TextBox";
import Heading from "@/components/Heading";
import Image from "next/image";
import PortfolioItem from "@/components/Portfolio/PortfolioItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/components/Form/ContactForm";

export default function Kontakt() {
    return (
        <main className="flex xl:w-[1250px] max-w-[1250px] min-h-screen flex-col items-center p-24">
            <MainSubpageVideo subpageTitle="Kontakt"/>
            <div className={`mb-[50px]`}>
                <TextBox width="full"
                         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu bibendum magna. Aenean tortor orci, tincidunt ac maximus ac, consectetur eu nunc. Nullam elementum quam sem, quis lacinia odio bibendum eget. "/>
            </div>
            {/* Contact me section */}
            <section className={`relative mb-[100px]`}>
                <div className={`relative mb-[50px]`}>
                    <Heading text={"Skontaktuj się ze mną"}/>
                    <Image src={"/images/underlines/long.svg"} width={181} height={8} alt={"Underline"}
                           className={`absolute translate-x-[215px]`}/>
                </div>
                <div className={`flex justify-center mb-[50px]`}>
                    <p className={`w-[500px]`}>Jeżeli chcesz uzyskać szybką wycenę lub dowiedzieć się więcej, to zachęcam do
                        kontaktu przez poniższy formularz 👇</p>
                </div>
                <div className={`relative flex`}>
                    <div className={`mr-[50px]`}>
                        <Subheading text="Kontakt do mnie"/>
                        <p className={`font-bold my-4`}>Kamil Krukowski</p>
                        <div className={`flex items-center`}>
                            <FontAwesomeIcon icon={faPhone} className={`text-dark mr-2`}/>
                            <p><a href={`tel:+48881046689`}>881 046 689</a></p>
                        </div>
                        <div className={`flex items-center`}>
                            <FontAwesomeIcon icon={faEnvelope} className={`text-dark mr-2`}/>
                            <p><a href={`mailto:kamil.krukowski00@gmail.com`}>kamil.krukowski00@gmail.com</a></p>
                        </div>
                    </div>
                    <div className={`ml-[50px]`}>
                        <ContactForm/>
                    </div>
                </div>
                <div
                    className={`absolute w-[250px] h-[250px] top-[350px] left-0 -rotate-12 -z-50 opacity-50`}>
                    <Image src={"/images/logo-dark.png"} alt={"Logo"} layout="fill"
                           className={`relative object-contain w-full h-full`}/>
                </div>
            </section>
        </main>
    );
}
