import SendButton from "@/components/Form/SendButton";
import {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {sendEmail} from "../../../utils/send-email";
import Subheading from "@/components/Subheading";

export type FormData = {
    name:string,
    email: string;
    details: string;
}

const ContactForm: FC = () => {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const [ isSended, setIsSended ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);

    async function onSubmit(data: FormData) {
        const res = await sendEmail(data);
        if (res.status === 500) {
            console.error(res.error);
            setError("Wystąpił błąd podczas wysyłania zapytania. Spróbuj ponownie później.");
            return;
        }
        setIsSended(true);
        reset();
    }

    return (
        <div>
            {isSended ?
                <Subheading text={`Zapytanie zostało wysłane! 🫡`}/> :
                <form onSubmit={handleSubmit(onSubmit)}
                      className={`flex flex-col items-center desktop:items-start w-full mt-5`}>
                    <div className={`relative flex flex-col mb-6 w-full`}>
                        <input type="name" id="name" placeholder=" " name="name"
                               required={true} {...register('name', {required: true})}
                               className={`w-full desktop:w-[400px] py-2 bg-light  border-b-2 border-dark focus:outline-none focus:border-primary transition-colors`}/>
                        <label htmlFor="name"
                               className={`absolute flex items-center text-dark font-medium h-full pointer-events-none transition-all`}>Imię</label>
                    </div>
                    <div className={`relative flex flex-col mb-6 w-full`}>
                        <input type="email" id="email" placeholder=" " name="email"
                               required={true} {...register('email', {required: true})}
                               className={`w-full desktop:w-[400px] py-2 bg-light  border-b-2 border-dark focus:outline-none focus:border-primary transition-colors`}/>
                        <label htmlFor="email"
                               className={`absolute flex items-center text-dark font-medium h-full pointer-events-none transition-all`}>Adres
                            e-mail</label>
                    </div>
                    <div className={`relative flex flex-col mb-8 w-full`}>
                        <label htmlFor="details"
                               className={` flex items-center text-dark font-medium h-full pointer-events-none transition-all`}>Jak
                            mogę Ci pomóc?</label>
                        <textarea id="details" placeholder="Treść wiadomości.." name="details" maxLength={1000}
                                  required={true} {...register('details', {required: true})}
                                  className={`w-full desktop:w-[400px] h-[150px] text-wrap py-2 bg-light border-b-2 border-dark focus:outline-none focus:border-primary transition-colors`}/>
                    </div>
                    {/* Error message */}
                    <p className={`text-red font-medium pb-4 w-[350px]`}>{error}</p>
                    <SendButton text={"Wyślij zapytanie"}/>
                </form>
            }
        </div>

    )
}

export default ContactForm;