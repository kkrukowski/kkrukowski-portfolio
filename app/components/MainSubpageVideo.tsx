export default function MainSubpageVideo({ videoUrl, subpageTitle }) {
    return (
        <div className={`relative flex justify-center items-center w-full h-[250px] sm:h-[400px] mb-[20px] sm:mb-[50px]`}>
            <h1 className={`absolute text-light font-bold text-[70px] sm:text-[90px] font-outline-2 outline-light`}>{subpageTitle}</h1>
            <div className={`bg-dark w-full h-full rounded-xl`}></div>
        </div>
    )
}