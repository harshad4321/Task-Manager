

const getAllTasks = (req,res)=>{
    res.send('ksksk')
}


const createTask = (req,res)=>{
    res.snd('1 st')
}
const getTask = (req,res)=>{
    res.snd('get task')
}
const updateTask = (req,res)=>{
    res.snd('update task')
}
const deleteTask = (req,res)=>{
    res.snd('delete task')
}
module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}