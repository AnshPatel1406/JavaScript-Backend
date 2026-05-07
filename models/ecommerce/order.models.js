import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema = new mongoose.Schema({

    orderPrice :{
        type:Number,
        required:true
    },
    customer :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    orderItems:{
        //type:[] // here we cant just define an array , we need the total products and their quantities also 
        // for this creating orderItemSchema on top ^
        type :[orderItemSchema] // its time is an array of orderItemSchema that we have Defined on the Top
        // we have kept it in same file so no need to export and use it 
        // this can also be done by array of object like [{},{}] // but the thing we did is professional
    },
    address:{
        type: String,
        required:true
    },
    status :{
        type : String,
        enum : ["Pending","Cancelled","Delivered"], // the string can take either of these 3 values 
        default: "Pending"
    }

},{timestamps:true})

export const order = mongoose.model("order",orderSchema) 