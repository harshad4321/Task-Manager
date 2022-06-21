
const express = require('express');
const app = express();
const task = require('./starter/routes/task')
const connectDB=require('./starter/db/connect')// DB connection
const dotenv = require("dotenv");
require('dotenv').config()
const notFound = require('./starter/middleware/not-found')
const errorHandlerMiddleware = require('./starter/middleware/error-handler')
//middleware
app.use(express.static('./public'))

app.use(express.json())


//routers
 
app.use('/api/v1/tasks',task)
app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT|| 3000;
const start =async()=>{
    try{   
await connectDB(process.env.MONGO_URI)
console.log()
// server.listen(3000);
app.listen(PORT,()=>{
    console .log(`server  is connected to port ${(PORT)}...`);  
})   
    }catch(error){
       console.log(error); 
    }
}
start()


