# JavaScript-Backend
Learning JavaScript Backend 



run in terminal 

npm init (node package manager se ek app ko initialize kardo)

in package.json do : 

"scripts": {
    "start" : "node index.js"
  }

here npm run start will run node index.js


now go to expressjs.com and see the hello world code and bring to index.js




now when we deploy it on server or githuv the source code is very vunreble should
be kept private 
sensitive data : username,login,password of database
should be kept private 

so on server the computer is not yours its of theirs so we need here 

install package : .env 

in terminal : npm i dotenv

make a file .env and we write our variables there 

in website we can see how to use 

write : require('dotenv').config()
in file


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

instead this we write 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


// deployment on server is in 2nd video of the series




// using Mongoose 

mongoosejs.com

moon modeler website to model whole schema of our website 
relation entities attributes etc
// generates mongoose code after doing the modeling 


eraser.io to make // but dosent give mongoose code



// Dry Run

Register : Email,password,username | register button 

Login : email,password

// like this we need to prepare everything first , later chnages can cause problems 

// Learning Mongoose 

npm i mongoose 


go to models folder for more 


// demo modeling using mongoose 

import mongoose from "mongoose";

// const todoSchema = new mongoose.Schema({},{timestamps:true})
const todoSchema = new mongoose.Schema({},{timestamps:true})


export const Todo = mongoose.model("Todo",todoSchema) // in mongodb it becomes todos
