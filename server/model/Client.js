import mongoose, { Mongoose } from "mongoose";

const clientSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }
})

module.exports = mongoose.model('Client' , clientSchema)