export default function Heading({ text }) {
    return (
        <div className={`flex flex-col items-center`}>
            <h1 className={`text-3xl text-dark font-bold mb-[25px]`}>{text}</h1>
        </div>
    )
}