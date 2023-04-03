// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Article from "models/Article";
connectToDb();
export default async function handler(req, res) {
    const {adminPin} = req.body;
    if(!adminPin){
        return res.json({success:false, msg:'Admin pin not provided'})
    };
    if(process.env.NEXT_PUBLIC_ADMIN_PIN!=adminPin){
        return res.json({success:false, msg:"Incorrect admin pin"});
    }
    const article = await Article.find({})
    if (!article) {
        return res.json({ success: false, msg: "Article Not Found" })
    }
    return res.json({ success: true, msg: "Article Found", article: article })
}
