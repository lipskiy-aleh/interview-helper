const express = require('express')
const candidatesController = require('../controllers/candidatesController')

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await candidatesController.getList()
  res.send(result)
})

router.post('/', async (req, res, next) => {
  try {
    const result = await candidatesController.addCandidate(req.body)
    res.send(result)
  } catch (error) {
    next(error)
  }
})


module.exports = router
