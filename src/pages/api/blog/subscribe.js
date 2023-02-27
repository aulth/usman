// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Subscriber from "models/Subscriber";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    const { email } = req.body;
    const newSub = await Subscriber.create({
        email
    })
    if(!newSub){
        return res.json({success:false, msg:"Subscription Failed"})
    }
    return res.json({success:true, msg:"Subscribed Succesfully"})
}
