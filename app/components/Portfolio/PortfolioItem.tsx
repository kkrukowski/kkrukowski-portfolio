import TextBox from "@/components/TextBox";

export default function PortfolioItem({ desc, videoUrl, marginLeft = false}) {
    return (
        <div className={`w-full md:w-[450px] mb-[50px] md:mb-0 ${marginLeft && 'md:ml-[50px]'}`}>
            <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className={`video rounded-xl object-cover w-full h-[300px]`}
            />
            <div className={`mt-[10px]`}>
                <TextBox text={desc} width='full'/>
            </div>
        </div>
    )
}