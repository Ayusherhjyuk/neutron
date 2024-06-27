import mongoose from "mongoose";

const {Schema,model}=mongoose;

const UserSchema = new Schema({

title: {type:String, required:true},
imgurl: {type:String},
entryfee: { type:Number},
reglink: {type:String,required:true},
date:{ type:Date},
prize: {type:Number},
createdAt: {type:Date,default:Date.now},
updatedAt: {type:Date,default:Date.now}

})


export default mongoose.models.Upcomingtour || model("Upcomingtour",UserSchema);