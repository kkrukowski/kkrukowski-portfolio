export default function TextBox({ text, width = '500px' }) {
    return (
        <div className={`rounded-2xl bg-dark p-6 w-[${width}] shadow-lg`}>
            <p className={`text-light text-justify`}>
                {text}
            </p>
        </div>
)}