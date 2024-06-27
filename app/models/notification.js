import mongoose from "mongoose";

const {Schema,model}=mongoose;

const UserSchema = new Schema({

title: {type:String, required:true},
description: {type:String, required:true},
link: {type:String},
createdAt: {type:Date,default:Date.now},
updatedAt: {type:Date,default:Date.now}

})


export default mongoose.models.notification || model("notification",UserSchema);