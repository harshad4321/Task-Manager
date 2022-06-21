const mongoose = require('mongoose')


 const connectDB =  async (url)=>{
            return await mongoose.connect(url,{
                //must add in order to not get any error masseges:
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            })
          .then(()=>console.log('connected to db...'))  
        .catch((error) => console.log(error.message))
            // process.exit(1) //passing 1 - will exit the proccess with error
   
        }


module.exports=connectDB



