import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";
import ContactForm from "@/components/Form/ContactForm";

const ContactSection = () => {
    return (
        <section className={`relative mb-[100px]`}>
            <div className={`relative mb-[50px]`}>
                <Heading text={"Zacznijmy projekt razem!"}/>
                {/*<Image src={"/images/underlines/long.svg"} width={181} height={8} alt={"Underline"}*/}
                {/*       className={`absolute translate-x-[215px]`}/>*/}
            </div>
            <div className={`flex justify-center mb-[50px]`}>
                <p className={`text-center w-[500px]`}>Jeżeli chcesz uzyskać szybką wycenę lub dowiedzieć się więcej, to zachęcam do
                    kontaktu przez poniższy formularz 👇</p>
            </div>
            <div className={`relative flex flex-col-reverse desktop:flex-row justify-center items-center desktop:items-start`}>
                <div className={`flex flex-col items-center desktop:items-start mt-[50px] desktop:mt-0 desktop:mr-[50px]`}>
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
                <div className={`w-full lg:w-auto desktop:ml-[50px]`}>
                    <ContactForm/>
                </div>
            </div>
            <div
                className={`hidden desktop:absolute w-[250px] h-[250px] top-[350px] left-0 -rotate-12 -z-50 opacity-50`}>
                <Image src={"/images/logo-dark.png"} alt={"Logo"} layout="fill"
                       className={`relative object-contain w-full h-full`}/>
            </div>
        </section>
    )
}

export default ContactSection;