import mongoose from "mongoose";

// mongoose help us to make schemas 


// const userSchema = new mongoose.Schema({

//     username:String,
//     email:String,
//     isActive : Boolean

// })
// *************** OR ************************

const userSchema = new mongoose.Schema({
  username : {
    type:String,
    required:true,
    unique : true,
    lowercase : true
  },
 //  email : String // here also object can be used same as username
  email : {
    required:true,
    type:String,
    unique:true,
    lowercase:true
  },
  password:{
    type:String,
    required:[true,"Password is Required"], // is it true if not then message is sent 
  }
},{timestamps:true}) // mongoose.Schema{Data Models},{timestamps:true}=> this secondary Object brings createdAt and updatedAt 
// we can see this in mongoose documentention 





export const User = mongoose.model("User",userSchema) // User is Model Name and on basic of userSchema it is made 
// when this model is connected to database a structure is created 

// When this Mongoose DataModel is connected to mongodb the User becomes users 
// becomes Lower Case and plural
// "Todo" becomes todos
