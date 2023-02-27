import mongoose from 'mongoose'
const Article  = new mongoose.Schema({
    title:String,
    link:String,
    category:String,
    cover:String,
    content:String,
    views:Number,
    live:Boolean,
    remarks:Array,
},{timestamps:true})

mongoose.models={};
export default mongoose.model('Article', Article);