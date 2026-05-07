const express = require('express')
// or import express from 'express' // based on style of js , common or module 
const app = express()
const port = 3000

app.get('/', (req, res) => { // request 
  res.send('Hello World!')
})

///by own

app.get('/twitter',(req,res)=>{
    res.send("AnshPatel.com")
})
// . listen will make a server that will constatly listen 
// when we give localhost:3000/twitter we get AnshPatel.com

app.get('/login',(req,res)=>{
    res.send("<h1>Please Login At HEHE.COM</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

