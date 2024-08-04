export default function Subheading({ text, className}) {
    return (
        <div>
            <h2 className={`text-2xl font-medium ${className}`}>{text}</h2>
        </div>
    )
}