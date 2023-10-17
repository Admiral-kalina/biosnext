import { toast } from "react-toastify";
import { strapiApi } from "@/api";
import axios from "axios";

async function sendEmail(body) {

    const config = {
        to: 'kalinamono@gmail.com',
        html:  body
    };

    try {
        const response = await axios.post('http://localhost:1337/api/email', config);

        if (response && response.status === 200) {
            toast.success(t('toast.message.success'));
        } else {
            toast.error(t('toast.message.failed'));
        }
    } catch (error) {
        toast.error(`An error occurred: ${error.message || 'Unknown error'}`);
    }
}

export default sendEmail;