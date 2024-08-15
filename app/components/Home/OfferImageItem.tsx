import Image from "next/image";
import OfferTextBox from "@/components/Home/OfferTextBox";

export default function OfferImageItem({text, title, href, linkText = false, src, alt, reverse = false}) {
    return (
        <div className={`flex items-center lg:items-start lg:flex-row flex-col mb-[50px] lg:mb-[25px] ${reverse ? 'lg:flex-row-reverse xl:mr-[200px]' : 'xl:ml-[200px]'}`}>
            <OfferTextBox title={title} text={text} href={href} linkText={linkText} />
            <Image src={src} alt={alt} width="400" height="300" className={`video rounded-2xl object-cover w-[400px] h-[300px] mt-[20px] lg:mt-0 ${reverse ? 'lg:mr-[50px]' : 'lg:ml-[50px]'}`} />
        </div>
    )
}