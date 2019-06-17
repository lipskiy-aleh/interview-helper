const express = require('express')
const questions = require('./questions')
const candidates = require('./candidates')

const router = express.Router()

router.use('/questions', questions)
router.use('/candidates', candidates)

module.exports = router
