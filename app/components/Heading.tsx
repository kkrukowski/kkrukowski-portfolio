import Image from "next/image";

export default function Heading({ text }) {
    return (
        <div className={`flex flex-col items-center`}>
            <h1 className={`text-2xl sm:text-3xl text-dark font-black`}>{text}</h1>
        </div>
    )
}