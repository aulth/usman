import { createTransport } from "nodemailer";
const key = process.env.key;
const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.email,
        pass: key
    },
});

const sendContactForm = async (req, res) => {
    const { data } = req.body;
    const mailOption = {
        from: `${data.name} <mohdusman.developer@gmail.com>`,
        to: 'mohdusman.you@gmail.com',
        subject:`Portfolio enquiry from ${data.email}`,
        text: data.message
    };
    transporter.sendMail(mailOption, (err, info) => {
        if (err) {
            return res.json({success:false, msg:err.message})
        }
        return res.json({ success: true, info });
    });

}
export default sendContactForm;