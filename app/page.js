'use client'

import Image from "next/image";

import Subheading from "@/components/Subheading";
import Heading from "@/components/Heading";
import TextBox from "@/components/TextBox";
import OfferItem from "@/components/Home/OfferItem";
import IconListItem from "@/components/Home/IconListItem";
import {faCertificate, faClock, faGavel, faHelmetSafety, faPerson, faStar} from "@fortawesome/free-solid-svg-icons";
import useNavStore from "@/app/store";
import ContactSection from "@/app/components/Contact/ContactSection";

export default function Home() {
    const updateMenuIndex = useNavStore((state) => state.updateMenuIndex);
    updateMenuIndex(0)

    return (<main className="w-screen max-w-[1250px] min-h-screen px-4 sm:px-12 desktop:px-24">
        {/* Hero section */}
        <section
            className={`relative flex flex-col items-center min-h-[600px] h-screen lg-h:-h:pt-[150px] mb-24 sm:sm-h:mb-48 sm:md-h:mb-[280px] sm:lg-h:mb-[220px] sm:xl-h:mb-[100px] pt-[90px] sm:pt-[110px]`}>
            <Subheading text={"👋, jestem Kamil i jestem pilotem dronów."}/>
            <div className={`absolute z-40 top-[30%] sm:top-1/3 w-screen flex flex-col items-center`}>
                <p className={`text-dark font-bold text-[65px] sm:text-[90px] md:text-[110px] lg:text-[150px] xl:text-[190px] 2xl:text-[220px] font-outline-2 sm:leading-[10rem]`}>Pilot
                    drona</p>
                <div className={`relative`}>
                    <p className={`text-light font-bold text-[53px] sm:text-[90px] md:text-[110px] lg:text-[150px] xl:text-[190px] 2xl:text-[220px] font-outline-2`}>
                        & Montażysta
                    </p>
                    <div
                        className={`hidden sm:absolute w-[64px] h-[64px] left-[-50px] sm:left-[-35px] top-0 md:top-[10px] lg:top-[30px] xl:top-[50px] rotate-12 -z-10 opacity-50`}>
                        <Image src={"/images/logo-dark.webp"}
                               alt={"Logo"}
                               fill
                               className={`relative object-contain w-full h-full`}/>
                    </div>
                </div>

            </div>
            <div className={`relative z-40 mt-auto w-screen`}>
                <div
                    className={`relative bottom-0 w-full h-[365px] sm:h-[450px] mt-28 sm:md-h:h-[550px] sm:lg-h:h-[600px] lg-h:mt-48`}>
                    <div className={`relative h-full w-full`}>
                        <Image src="/images/profile-nobg.webp"
                               alt="Kamil Krukowski"
                               fill
                               className={`relative object-contain w-full h-full`}
                               priority
                        />
                        <div
                            className={`absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] left-1/2 -translate-x-[50px] bottom-0 sm:translate-x-[70px] sm:top-[350px] rotate-12 -z-50 opacity-50`}>
                            <Image src={"/images/logo-dark.webp"}
                                   alt={"Logo"}
                                   fill
                                   className={`relative object-contain w-full h-full`}/>
                        </div>
                    </div>
                </div>
                <div
                    className={`absolute bottom-0 z-40 mt-auto bg-gradient-to-t from-light w-full h-[300px]`}></div>
            </div>
        </section>

        {/* About me section */}
        <section className={`mb-[100px]`}>
            <div className={`mb-[50px]`}>
                <Heading text={"Poznaj mnie"}/>
            </div>
            <div className={`flex flex-col items-center desktop:items-start desktop:flex-row`}>
                <TextBox
                    text="Cześć! 👋 Nazywam się Kamil Krukowski i jestem pasjonatem technologii dronowej oraz profesjonalnym montażystą filmów promocyjnych. Specjalizuję się w filmowaniu dronem, w tym w zaawansowanych technologiach FPV (First-Person View), które pozwalają mi na uchwycenie spektakularnych i immersyjnych ujęć. Dzięki licencjom NSTS-01/06 i doświadczeniu w produkcji filmów reklamowych, zapewniam dynamiczne i angażujące materiały wideo. Każdy projekt realizuję z pełnym zaangażowaniem, dbając o najwyższą jakość i indywidualne podejście do Twoich potrzeb. Moim celem jest nie tylko dostarczenie wyjątkowego produktu, ale także zapewnienie Ci bezpiecznej i bezproblemowej współpracy."/>
                <div
                    className={`relative w-full max-w-[400px] h-[250px] desktop:w-[300px] desktop:h-[300px] desktop:mt-0 desktop:ml-[50px] flex-shrink-0`}>
                    <Image src={"/images/kkrukowski-fpv.webp"}
                           alt={"Kamil Krukowski"}
                           layout="fill"
                           className={`relative object-cover object-top w-full h-full rounded-2xl mt-[50px] desktop:mt-0 shadow-lg`}/>
                </div>
            </div>
        </section>

        {/* Offer section */}
        <section className={`mb-[100px] relative`}>
            <div className={`relative mb-[50px]`}>
                <Heading text={"Co mogę Ci zapewnić?"}/>
                {/*<Image src={"/images/underlines/short.svg"} width={30} height={3} alt={"Underline"}*/}
                {/*       className={`absolute translate-x-[495px]`}/>*/}
            </div>
            <div>
                <OfferItem text="Profesjonalne filmowanie dronem, które uchwyci wyjątkowe ujęcia Twojego wydarzenia, nieruchomości lub projektu. Gwarantuję najwyższą jakość obrazu i pełne bezpieczeństwo lotu. Dzięki moim usługom dronem, Twoje filmy reklamowe wyróżnią się na tle konkurencji."
                           title="Filmowanie z powietrza"
                           href={"/"}
                           linkText="Zobacz więcej"
                           src="/images/placeholer-video.webp"
                           alt="Offer video example"
                           reverse={false}
                />
                <OfferItem text="Dynamiczne nagrania FPV (First-Person View) idealne do immersyjnych filmów promocyjnych i sportowych. Dzięki nowatorskim ujęciom i dronom wyścigowym, Twoje wideo zyskają unikalność i atrakcyjność. Filmy FPV przyciągną uwagę i zapadną w pamięć."
                           title="Filmowanie FPV"
                           href={"/"}
                           linkText="Zobacz więcej"
                           src="/images/placeholer-video.webp"
                           alt="Offer video example"
                           reverse={true}
                />
                <OfferItem text="Tworzę angażujące filmy reklamowe, które wyróżnią Twoją markę. Dbam o każdy detal, aby finalny produkt był spójny z Twoją wizją i celami marketingowymi."
                           title="Montaż filmów promocyjnych"
                           href={"/uslugi"}
                           linkText="Zobacz więcej"
                           src="/images/placeholer-video.webp"
                           alt="Offer video example"
                           reverse={false}
                />
            </div>
            <div
                className={`absolute w-[250px] h-[250px] top-1/2 desktop:left-[500px] lg:left-[800px] rotate-12 -z-50 opacity-50`}>
                {/*<Image src={"/images/logo-dark.webp"} alt={"Logo"} layout="fill"*/}
                {/*       className={`relative object-contain w-full h-full`}/>*/}
            </div>
        </section>

        {/* Trust me section */}
        <section className={`mb-[100px]`}>
            <div className={`relative mb-[50px]`}>
                <Heading text={"Jak o Ciebie zadbam?"}/>
                {/*<Image src={"/images/underlines/medium.svg"} width={128} height={10} alt={"Underline"}*/}
                {/*       className={`absolute translate-x-[400px]`}/>*/}
            </div>
            <div className={`flex justify-center`}>
                <div className={`flex flex-col xl:flex-row w-fit`}>
                    <div className={`w-fit`}>
                        <IconListItem text="Moim priorytetem jest bezpieczeństwo."
                                      icon={faHelmetSafety}/>
                        <IconListItem text="Posiadam kwalifikacje i licencje NSTS-01/06."
                                      icon={faCertificate}/>
                        <IconListItem text="Każdy lot wykonuję legalnie."
                                      icon={faGavel}/>
                    </div>
                    <div className={`w-fit xl:ml-[50px]`}>
                        <IconListItem text="Do każdego zlecenia podchodzę indywidualnie."
                                      icon={faPerson}/>
                        <IconListItem text="Dbam o jak najwyższą jakość produkcji."
                                      icon={faStar}/>
                        <IconListItem text="Szanuję Twój czas oraz komunikację."
                                      icon={faClock}/>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact me section */}
        <ContactSection/>
    </main>);
}
