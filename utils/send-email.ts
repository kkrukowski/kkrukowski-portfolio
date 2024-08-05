import { FormData } from '@/components/Form/ContactForm';
import axios from "axios";

export async function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';

    try {
        const res = await axios.post(apiEndpoint, data);
        return res.data
    } catch (err) {
        console.error(err);
        throw err
    }
}