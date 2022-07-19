const mongoose  = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
   
},
{
    timestamps:true
})

module.exports = mongoose.model('Task',TaskSchema)