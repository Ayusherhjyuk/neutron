import mongoose from "mongoose";

const {Schema,model}=mongoose;

const UserSchema = new Schema({

title: {type:String, required:true},
imgurl: {type:String},
entryfee: { type:Number},
date:{type:Date},
prize: {type:Number},
winnername:{type:String},
createdAt: {type:Date,default:Date.now},
updatedAt: {type:Date,default:Date.now}

})


export default mongoose.models.pasttour || model("pasttour",UserSchema);