// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Article from "models/Article";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    const { id, live } = req.body;
    const newArticle = await Article.findOneAndUpdate({_id:id},{
        live: live,
    })
    if(!newArticle){
        return res.json({success:false, msg:"Article Not Updated"})
    }
    if(live){
        return res.json({success:true, msg:"Article lived"})
    }
    return res.json({success:true, msg:"Article drafted"})
}
