const express = require('express');
const router = express.Router()
const {
    getAllTasks,
    getTask,
    createTask,
    modifyTask,
    deleteTask
} = require('../controllers/taskController');


router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).put(modifyTask).delete(deleteTask);

module.exports = router;