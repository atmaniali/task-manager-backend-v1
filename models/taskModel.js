const mongoose = require('mongoose')

taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxLength : 25
    },
    do: {
        type: Boolean,
        default : false,
    }
})

const TaskModel = mongoose.model('Task', taskSchema)

module.exports = TaskModel;