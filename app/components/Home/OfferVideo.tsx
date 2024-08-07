export default function OfferVideo({src, reverse = false}) {
    return (
        <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className={`video rounded-2xl object-cover w-[400px] h-[300px] mt-[20px] lg:mt-0 ${reverse ? 'lg:mr-[50px]' : 'lg:ml-[50px]'}`}
            ></video>
    )
}