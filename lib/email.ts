import axios from "axios"
import { Contact } from "@/models/contact"
export const sendEmail = async (data: Contact): Promise<boolean> => {
    const msg = {
        to: "mohdusman.you@gmail.com",
        from: "Portfolio <mohdusman.developer@gmail.com>",
        "reply-to": data.email,
        subject: `Query from ${data.name}`,
        text: `${data.text}`
    }
    try {
        const response = await axios.post("/api/email", {
            ...msg
        })
        return response.data.success;
    } catch (error) {
        return false;
    }

}