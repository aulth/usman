// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Article from "models/Article";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    const { link } = req.body;
    const article = await Article.findOne({link:link})
    if(!article){
        return res.json({success:false, msg:"Article Not Found"})
    }
    return res.json({success:true, msg:"Article Found", article:article})
}
