// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Article from "models/Article";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    const { data } = req.body;
    try {
        const newArticle = await Article.create({
            title: data.title,
            link: data.title.toLowerCase().replace(/[:,']/g, '').split(/\s+/).join('-'),
            category: data.category,
            cover: data.cover,
            content: data.content,
            views: 0,
            live: data.live,
        })
        if (!newArticle) {
            if (data.live) {
                return res.json({ success: false, msg: "Creation Failed" })
            }
            return res.json({ success: false, msg: "Article Not Saved" })
        }
        if (data.live) {
            return res.json({ success: true, msg: "Article Published" })
        }
        return res.json({ success: true, msg: "Article Saved" })
    } catch (error) {
        if(error.message.includes("duplicate")){
        return res.json({ success: false, msg: "This article is already created, please edit via admin panel" })
        }
        return res.json({ success: false, msg: error.message })
    }
}
