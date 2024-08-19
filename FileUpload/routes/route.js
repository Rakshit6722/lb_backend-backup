const express = require('express')
const router = express.Router()

const {localFileUpload,cloudinaryFileUpload} = require('../controllers/fileUpload')
const {videoUpload} = require('../controllers/videoUpload')
const {imageCompressor} = require('../controllers/imageCompressor')

router.post("/localFileUpload",localFileUpload);
router.post("/cloudinaryFileUpload",cloudinaryFileUpload)
router.post("/videoUpload",videoUpload)
router.post("/fileCompressor",imageCompressor)

module.exports = router;