import mongoose from "mongoose";

const productModelSchema = new mongoose.Schema({

    description :{
        type:String,
        required:true
    },
    name:{
        required:true,
        type:String
    },
    productImage:{
        type:String // api will fetched as string 

    },
    price:{
        type:Number,
        default:0
    },
    stock :{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category", // came from categories.models.js export 
        required:true
    },
    owner :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

},{timestamps:true})

export const Product = mongoose.model("Product",productModelSchema)