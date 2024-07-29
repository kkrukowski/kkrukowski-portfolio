import Image from "next/image";
import OfferTextBox from "@/components/Home/OfferTextBox";

export default  function OfferItem({text, src, alt, reverse = false}) {
    return (
        <div className={`flex mb-[25px] ${reverse ? 'flex-row-reverse mr-[200px]' : 'ml-[200px]'}`}>
            <OfferTextBox text={text}/>
            <Image src={src} alt={alt} width={400} height={300}
                   className={`rounded-2xl ${reverse ? 'mr-[50px]' : 'ml-[50px]'}`}/>
        </div>
    )
}