import OfferTitle from '@/components/Home/OfferTitle'
import HrefLink from "@/components/HrefLink";

export default function TextBox({ text, title, href, linkText }) {
    return (
        <div className={`flex flex-col justify-between rounded-2xl bg-dark p-8 w-full lg:w-[400px] lg:h-[300px] shadow-lg`}>
            <div>
                <OfferTitle text={title}/>
                <p className={`text-light text-justify mb-4`}>
                    {text}
                </p>
            </div>
            <HrefLink href={href} text={linkText}/>
        </div>
    )
}