// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Article from "models/Article";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    const { id } = req.body;
    const article = await Article.findByIdAndDelete(id)
    if(!article){
        return res.json({success:false, msg:"Article Not Deleted"})
    }
    return res.json({success:true, msg:"Article Deleted"})
}
