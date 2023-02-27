import mongoose from 'mongoose'
const Article  = new mongoose.Schema({
    title:String,
    link:{
        type:String,
        unique:true,
    },
    category:String,
    cover:String,
    content:String,
    views:Number,
    live:Boolean,
    remarks:Array,
},{timestamps:true})

mongoose.models={};
export default mongoose.model('Article', Article);