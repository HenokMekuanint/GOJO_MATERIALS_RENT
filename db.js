const mongoose=require("mongoose");
const { getHeapSnapshot } = require("v8");

function connectDB(){

    mongoose.connect('mongodb+srv://hena:naddy@cluster0.28ldg.mongodb.net/gojoo',{useUnifiedTopology:true,useNewUrlParser:true});
    const connection = mongoose.connection
    connection.on('connected',()=>{
        console.log('mongodb connection successful')
    })
    connection.on('error',()=>{
            console.log("mongo db connection error")

    })
}
connectDB()
module.exports=mongoose

