export default function TextBox({ text }) {
    return (
        <div className={`rounded-2xl bg-dark p-8 w-[500px] shadow-lg`}>
            <p className={`text-light text-justify`}>
                {text}
            </p>
        </div>
)}