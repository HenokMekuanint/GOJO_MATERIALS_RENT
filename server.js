const express =require('express')
const app=express()
const port=process.env.port ||5000
 const dbConnection=require('./db')
app.get('/',(req,res)=>res.send('hello world'))
app.listen(port,()=>console.log(`Node js server started at port ${port}`))