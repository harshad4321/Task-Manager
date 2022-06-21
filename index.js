
const express = require('express');
const app = express();
const task = require('./starter/routes/task')
const connectDB=require('./starter/db/connect')// DB connection
// const dotenv = require("dotenv");
require('dotenv').config()

//middleware


app.use(express.json())


//routers
app.get('/hai',(req,res)=>{
 res.send('haii')
})
 
app.use('/api/v1/tasks',task)

const PORT =  3000;
const start =async()=>{
    try{   
await connectDB(process.env.MONGO_URI)
// server.listen(3000);
app.listen(PORT,()=>{
    console .log(`server  is connected to port ${(PORT)}...`);  
})   
    }catch(error){
       console.log(error); 
    }
}
start()


