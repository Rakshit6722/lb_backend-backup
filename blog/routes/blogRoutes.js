const express = require('express')
const router = express.Router()

const {createBlog} = require('../controllers/createBlog')
const {getBlog,getBlogById} = require('../controllers/getBlog')
const {updateLike} = require('../controllers/updateLike')
const {addComment} = require('../controllers/addComment')

router.post("/createBlog",createBlog)
router.get("/getBlog",getBlog)
router.get("/getBlog/:id",getBlogById)
router.post("/like/updateLike/:id",updateLike)
router.post("/addComment/:id",addComment)


module.exports = router