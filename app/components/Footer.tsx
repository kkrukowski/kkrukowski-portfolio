import Image from 'next/image';
import Subheading from "@/components/Subheading";

export default function Footer() {
    return (
        <footer className={`flex flex-col sm:flex-row justify-center items-center bg-dark p-8 w-full`}>
            <div
                className={`relative w-[64px] h-[64px] sm:w-[100px] sm:h-[100px]`}>
                <Image src={"/images/logo-light.png"} alt={"Logo"} layout="fill"
                       className={`relative object-contain w-full h-full`}/>
            </div>
            <div className={`w-[100px] h-0.5 sm:w-0.5 sm:h-[100px] rounded-full my-8 sm:mx-8 bg-light`}></div>
            <div className={`h-full`}>
                <p className={`font-bold text-light text-xl`}>Kamil Krukowski</p>
                <p className={`text-light`}><a href={`tel:+48881046689`}>881 046 689</a></p>
                <p className={`text-light`}><a
                    href={`mailto:kamil.krukowski00@gmail.com`}>kamil.krukowski00@gmail.com</a></p>
            </div>
        </footer>
    )
}