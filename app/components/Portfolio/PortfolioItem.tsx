import TextBox from "@/components/TextBox";

export default function PortfolioItem({ desc, video }) {
    return (
        <div className={`w-[450px]`}>
            <div className={`w-[450px] h-[300px] bg-dark rounded-xl`}>

            </div>
            <div className={`mt-[10px]`}>
                <TextBox text={desc} width='full'/>
            </div>
        </div>
    )
}