const express = require('express')
const questions = require('./questions')
const candidates = require('./candidates')
const user = require('./user')

const router = express.Router()

router.use('/questions', questions)
router.use('/candidates', candidates)
router.use('/user', user)

module.exports = router
