const mongoose= require('mongoose')


const TaskScheama =new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name can not more than 20 characters ']
    },
    compleated:{
        type:Boolean,
        default:false,
    }
})


module.exports= mongoose.model('Task',TaskScheama)