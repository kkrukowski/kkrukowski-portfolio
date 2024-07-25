import Image from 'next/image';
import Subheading from "@/components/Subheading";

export default function Footer() {
    return (
        <footer className={`flex justify-center items-center bg-dark p-8 w-full`}>
            <Image src="/images/logo-light.png" alt="Logo" width={116} height={100} />
            <div className={`w-0.5 h-[100px] rounded-full mx-8 bg-light`}></div>
            <div className={`h-full`}>
                <p className={`font-bold text-light text-xl`}>Kamil Krukowski</p>
                <p className={`text-light`}><a href={`tel:+48881046689`}>881 046 689</a></p>
                <p className={`text-light`}><a href={`mailto:kamil.krukowski00@gmail.com`}>kamil.krukowski00@gmail.com</a></p>
            </div>
        </footer>
    )
}