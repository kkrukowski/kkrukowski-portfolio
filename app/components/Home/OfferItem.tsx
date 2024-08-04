import Image from "next/image";
import OfferTextBox from "@/components/Home/OfferTextBox";

export default  function OfferItem({text, src, alt, reverse = false}) {
    return (
        <div className={`flex items-center lg:items-start lg:flex-row flex-col mb-[50px] lg:mb-[25px] ${reverse ? 'lg:flex-row-reverse xl:mr-[200px]' : 'xl:ml-[200px]'}`}>
            <OfferTextBox text={text}/>
            <Image src={src} alt={alt} width={400} height={300}
                   className={`rounded-2xl mt-[20px] lg:mt-0 ${reverse ? 'lg:mr-[50px]' : 'lg:ml-[50px]'}`}/>
        </div>
    )
}