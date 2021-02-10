const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createNewTask,
    changeTaskInfo,
    deleteTask
} = require('../controller/task.controller');

router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTask);
router.patch('/updateTask', changeTaskInfo);
router.delete('/removeTask', deleteTask);

module.exports = router;