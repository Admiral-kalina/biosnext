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
            toast.success('Message sent successfully!');
        } else {
            toast.error('Failed to send the message. Please try again later.');
        }
    } catch (error) {
        toast.error(`An error occurred: ${error.message || 'Unknown error'}`);
    }
}

export default sendEmail;