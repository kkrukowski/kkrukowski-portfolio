import Image from "next/image";

import Subheading from "@/components/Subheading";
import Heading from "@/components/Heading";
import TextBox from "@/components/TextBox";
import OfferItem from "@/components/Home/OfferItem";
import IconListItem from "@/components/Home/IconListItem";
import ContactForm from "@/components/Form/ContactForm";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHelmetSafety, faCertificate, faGavel, faPerson, faStar, faClock, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex max-w-[1250px] min-h-screen flex-col items-center pb-24 px-24 justify-between">
        {/* Hero section */}
        <section className={`relative flex flex-col items-center min-h-[600px] h-screen pt-[150px] mb-24 sm-h:mb-48 md-h:mb-[280px] lg-h:mb-[220px] xl-h:mb-[100px]`}>
            <Subheading text={"👋, jestem Kamil i jestem pilotem dronów."}/>
            <div className={`absolute z-40 top-1/3 w-screen flex flex-col items-center`}>
                <p className={`text-dark font-bold text-[60px] sm:text-[90px] md:text-[110px] lg:text-[150px] xl:text-[190px] 2xl:text-[220px] font-outline-2 leading-[10rem]`}>Pilot drona</p>
                <div className={`relative`}>
                    <p className={`text-light font-bold text-[60px] sm:text-[90px] md:text-[110px] lg:text-[150px] xl:text-[190px] 2xl:text-[220px] font-outline-2`}>
                        & Montażysta
                    </p>
                    <div className={`absolute w-[64px] h-[64px] left-[-50px] sm:left-[-35px] top-0 md:top-[10px] lg:top-[30px] xl:top-[50px] rotate-12 -z-10 opacity-50`}>
                        <Image src={"/images/logo-dark.png"} alt={"Logo"} layout="fill"
                               className={`relative object-contain w-full h-full`}/>
                    </div>
                </div>

            </div>
            <div className={`relative z-40 mt-auto w-screen`}>
                <div className={`relative bottom-0 w-full h-[450px] mt-28 md-h:h-[550px] lg-h:h-[600px] lg-h:mt-48`}>
                    <div className={`w-fit`}>
                        <Image src="/images/profile-nobg.png" alt="Kamil Krukowski" layout="fill"
                               className={`relative object-contain w-full h-full`}/>
                        <div
                            className={`absolute w-[250px] h-[250px] left-1/2 translate-x-[70px] top-[350px] rotate-12 -z-50 opacity-50`}>
                            <Image src={"/images/logo-dark.png"} alt={"Logo"} layout="fill"
                                   className={`relative object-contain w-full h-full`}/>
                        </div>
                    </div>
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
        <section className={`mb-[100px] relative`}>
            <div className={`relative mb-[50px]`}>
                <Heading text={"Co mogę Ci zapewnić?"}/>
                <Image src={"/images/underlines/short.svg"} width={30} height={3} alt={"Underline"}
                       className={`absolute translate-x-[495px]`}/>
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

        {/* Trust me section */}
        <section className={`mb-[100px]`}>
            <div className={`relative mb-[50px]`}>
                <Heading text={"Dlaczego możesz mi zaufać?"}/>
                <Image src={"/images/underlines/medium.svg"} width={128} height={10} alt={"Underline"}
                       className={`absolute translate-x-[400px]`}/>
            </div>
            <div className={`flex`}>
                <div>
                    <IconListItem text="Moim priorytetem jest bezpieczeństwo." icon={faHelmetSafety}/>
                    <IconListItem text="Posiadam kwalifikacje i licencje NSTS-01/06." icon={faCertificate}/>
                    <IconListItem text="Każdy lot wykonuję legalnie." icon={faGavel}/>
                </div>
                <div className={`ml-[50px]`}>
                    <IconListItem text="Do każdego zlecenia podchodzę indywidualnie." icon={faPerson}/>
                    <IconListItem text="Dbam o jak najwyższą jakość produkcji." icon={faStar}/>
                    <IconListItem text="Szanuję komunikację oraz Twój czas." icon={faClock}/>
                </div>
            </div>
        </section>

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
