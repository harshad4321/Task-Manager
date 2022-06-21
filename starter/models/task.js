const mongoose= require('mongoose')


const TaskScheama =new mongoose.Schema({
    name:String,compleated:Boolean
})


module.exports= mongoose.model('Task',TaskScheama)