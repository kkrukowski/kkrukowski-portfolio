export default function SendButton({text}) {
    return (
        <button className={`bg-primary hover:bg-primary-light active:bg-primary-dark p-2 rounded-xl font-bold transition-colors`}>
            {text}
        </button>
    )
}