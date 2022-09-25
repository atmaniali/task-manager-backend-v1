const path  = require('path')
const Task = require('../models/taskModel');

const getAllTasks = async (req, res) => {
    console.log('All')
    try {
        const tasks = await Task.find({})
        if (!tasks) {
            return res.status(404).json({msg:'no Tasks'})
        }
        res.status(200).json({tasks});
     } catch (err) {
        res.status(500).json({ err})
    }
}

const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({ _id: id });
        if (!task) return res.sendStatus(400);
        res.status(200).json({task})
     } catch (err) {
        res.sendStatus(500);
    }
}

const createTask = async (req, res) => {
    console.log('create')
    try {
        const body = req.body
        console.log(body)
        const task = await Task.create(body)
        if (!task) return res.sendStatus(400)
        res.status(201).json({task})
    }catch(err){res.sendStatus(500)}
}

const modifyTask = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const task = await Task.findByIdAndUpdate({ _id: id }, body)
        if (!task) return res.sendStatus(400);
        res.status(200).json({ task });
     } catch (err) {
        res.sendStatus(500)
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findOneAndDelete({ _id: id });
        if (!task) return res.sendStatus(400);
        res.status(200).json({task})
     } catch (err) {
        res.sendStatus(500)
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    modifyTask,
    deleteTask
}