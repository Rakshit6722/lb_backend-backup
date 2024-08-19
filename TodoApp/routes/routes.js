const express = require('express');
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodos");
const {updateTodo} = require('../controllers/updateTodo')
const {delteTodo, deleteTodo} = require('../controllers/deleteTodo')

router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo)
router.get("/getTodo/:id",getTodoById)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)

module.exports = router