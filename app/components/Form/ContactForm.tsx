import SendButton from "@/components/Form/SendButton";


export default function ContactForm({ text }) {
    return (
        <form action="/contact" method="post" className={`mt-5`}>
            <div className={`relative flex flex-col mb-6`}>
                <input type="email" id="email" placeholder=" " name="email" required={true}
                       className={`w-[400px] py-2 bg-light  border-b-2 border-dark focus:outline-none focus:border-primary transition-colors`}/>
                <label htmlFor="email"
                       className={`absolute flex items-center text-dark font-medium h-full pointer-events-none transition-all`}>Adres
                    e-mail</label>
            </div>
            <div className={`relative flex flex-col mb-8`}>
                <label htmlFor="details"
                       className={` flex items-center text-dark font-medium h-full pointer-events-none transition-all`}>Jak
                    mogę Ci pomóc?</label>
                <textarea id="details" placeholder="Treść wiadomości.." name="details" maxLength={1000} required={true}
                          className={`w-[400px] h-[150px] text-wrap py-2 bg-light border-b-2 border-dark focus:outline-none focus:border-primary transition-colors`}/>
            </div>
            <SendButton/>
        </form>
    )
}