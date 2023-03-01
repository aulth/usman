// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Article from "models/Article";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    const { link, data } = req.body;
    console.log('getviewer api hitted')
    try {
        var existingArticle = await Article.findOne({ link: link });
        var existingData = existingArticle.viewers;
        if(!existingData){
            existingData = [];
        }
        existingData.push(data);
        const newArticle = await Article.findOneAndUpdate({ link: link }, {
            viewers: existingData
        })
        return res.json({ success: true })
    } catch (error) {
        return res.json({ success: false })
    }
}
