const express = require('express');
const app = express();
const task = require('./starter/routes/task')

//middleware
app.use(express.json())


//routers
app.get('/hai',(req,res)=>{
 res.send('haii')
})
 
app.use('/',task)

const PORT = process.env.PORT|| 3000;

// server.listen(3000);
app.listen(PORT,()=>{
    console .log(`server is connected to port ${(PORT)}.`);
})  