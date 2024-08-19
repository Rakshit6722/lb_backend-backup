const express = require('express')
const router = express.Router()

const {createAccount} = require('../controllers/singupController')
const {login} = require('../controllers/loginController')
const {auth,isStudent,isAdmin} = require('../middlewares/middleware')

router.post("/createUser",createAccount)
router.post("/login",login)

//PROTECTED ROUTES
router.get("/student",auth,isStudent,(req,res)=>res.json({message:'Welcome to student dashboard'}))
router.get("/admin",auth,isAdmin,(req,res)=>res.json({message:'Welcome to admin dashboard'}))

module.exports = router