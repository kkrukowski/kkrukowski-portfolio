import Image from "next/image";
import OfferTextBox from "@/components/Home/OfferTextBox";
import OfferVideo from "@/components/Home/OfferVideo";

export default function OfferItem({text, title, href, linkText, src, alt, reverse = false}) {
    return (
        <div className={`flex items-center lg:items-start lg:flex-row flex-col mb-[50px] lg:mb-[25px] ${reverse ? 'lg:flex-row-reverse xl:mr-[200px]' : 'xl:ml-[200px]'}`}>
            <OfferTextBox title={title} text={text} href={href} linkText={linkText} />
            <OfferVideo src={src} reverse={reverse}/>
        </div>
    )
}