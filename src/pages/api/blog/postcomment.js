// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Article from "models/Article";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    const { data, id } = req.body;
    data.createdAt = new Date();
    var existing = await Article.findById(id);
    console.log(existing)
    var remarks = existing.remarks;
    remarks.push(data)
    console.log(remarks);
    const newArticle = await Article.findOneAndUpdate({_id:id},{
        remarks:remarks
    })
    if(!newArticle){
        return res.json({success:false, msg:"Comment Not Published"})
    }
    return res.json({success:true, msg:"Remark added"})
}
