// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Article from "models/Article";
connectToDb();
export default async function handler(req, res) {
    let article = await Article.find({})
    if (!article) {
        return res.json({ success: false, msg: "Article Not Found" })
    }
    article = article.map((article, index) => {
        return {
            title: article.title,
            link: article.link,
            category: article.category,
            cover: article.cover,
            content: article.content,
            views: article.views,
            live: article.live,
            remarks: article.remarks,
            createdAt: article.createdAt
        }
    })
    return res.json({ success: true, msg: "Article Found", article: article })
}
