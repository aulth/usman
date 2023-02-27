import mongoose from 'mongoose'
const Subscriber  = new mongoose.Schema({
    email:String,
},{timestamps:true})

mongoose.models={};
export default mongoose.model('Subscriber', Subscriber);