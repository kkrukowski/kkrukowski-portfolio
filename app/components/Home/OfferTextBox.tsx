import OfferTitle from '@/components/Home/OfferTitle'
import HrefLink from "@/components/HrefLink";

export default function TextBox({ text }) {
    return (
        <div className={`rounded-2xl bg-dark p-8 w-full lg:w-[400px] lg:h-[300px] shadow-lg`}>
            <OfferTitle text="Title"/>
            <p className={`text-light text-justify mb-4`}>
                {text}
            </p>
            <HrefLink href={"/"} text="Read more"/>
        </div>
    )
}