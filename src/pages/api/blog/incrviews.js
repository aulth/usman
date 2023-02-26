// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Article from "models/Article";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    const {link } = req.body;
    const existingArticle = await Article.findOne({link:link});
    const newArticle = await Article.findOneAndUpdate({link:link},{
        views:existingArticle.views+1
    })
    return res.json({success:true})
}
