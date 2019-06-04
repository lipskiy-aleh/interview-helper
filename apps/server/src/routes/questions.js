const express = require('express')
const questionsController = require('../controllers/questionsController')

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await questionsController.getList()
  res.send(result)
})

router.post('/', async (req, res) => {
  const result = await db.create({ text: 'Hello world' })
  res.send(result)
})

module.exports = router
