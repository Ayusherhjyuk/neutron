import mongoose from "mongoose";

const {Schema,model}=mongoose;

const UserSchema = new Schema({

title: {type:String, required:true},
imgurl: {type:String},
reglink: {type:String,required:true},
entryfee: { type:Number},
prize: {type:Number},
createdAt: {type:Date,default:Date.now},
updatedAt: {type:Date,default:Date.now}

})


export default mongoose.models.Ongoingtour || model("Ongoingtour",UserSchema);