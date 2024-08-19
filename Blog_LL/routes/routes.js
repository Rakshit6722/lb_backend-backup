const express = require('express')
const router = express.Router();

const {createComment} = require('../controllers/comment')
const {createPost} = require('../controllers/post')
const {createLike,createUnlike} = require('../controllers/like')

router.post("/createComment",createComment)
router.post("/createPost",createPost)
router.post("/like",createLike)
router.post("/unlike",createUnlike)

module.exports = router;