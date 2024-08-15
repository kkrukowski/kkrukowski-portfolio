import OfferVideo from "@/components/Home/OfferVideo";

export default function MainSubpageVideo({ videoUrl, subpageTitle }) {
    return (
        <div className={`relative flex justify-center items-center w-full h-[250px] sm:h-[400px] mb-[20px] sm:mb-[50px]`}>
            <h1 className={`absolute text-light font-bold text-[70px] sm:text-[90px] font-outline-2 outline-light z-20`}>{subpageTitle}</h1>
            <div className={`absolute bg-dark rounded-xl w-full h-full opacity-35 z-10`}></div>
            <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className={`video rounded-xl object-cover w-full h-full`}
            ></video>
        </div>
    )
}