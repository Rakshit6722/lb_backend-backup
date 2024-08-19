const express = require('express')
const router = express.Router()
const {createTodo} = require('../controller/createTodo')
router.post("/createTodo",createTodo)
module.exports=router