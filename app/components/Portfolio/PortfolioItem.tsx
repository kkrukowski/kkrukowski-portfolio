import TextBox from "@/components/TextBox";

export default function PortfolioItem({ desc, video, marginLeft = false}) {
    return (
        <div className={`w-full md:w-[450px] mb-[50px] md:mb-0 ${marginLeft && 'md:ml-[50px]'}`}>
            <div className={`w-full h-[300px] bg-dark rounded-xl`}>

            </div>
            <div className={`mt-[10px]`}>
                <TextBox text={desc} width='full'/>
            </div>
        </div>
    )
}