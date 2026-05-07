import mongoose from "mongoose";

// const todoSchema = new mongoose.Schema({},{timestamps:true})
const todoSchema = new mongoose.Schema({

    content : {
        type: String,
        required:true,

    },
    complete:{
        type:Boolean,
        default:false,

    },
    createdBy :{
        // here it has a reference type in createdBy

        type:mongoose.Schema.Types.ObjectId,
        ref:"User" // after Writing the upper line the next line is always ref 
        // here in ref "User" should be same as the export thing in user.models.js
    },

    // subTodos:{
    //     type:Array,
    // } OR

    subTodos : [
        {
         type:mongoose.Schema.Types.ObjectId,
         ref:"SubTodo"     // here SubTodo comes from sub_todos.model // export line 
        }
    ] // Array of Sub Todos 

},{timestamps:true})


export const Todo = mongoose.model("Todo",todoSchema) // in mongodb it becomes todos