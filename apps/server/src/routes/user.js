const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await userController.getUser(req.user)
  res.send(result)
})

router.post('/', async (req, res) => {
  const result = await userController.createUser(req.user, req.body)
  res.send(result)
})

module.exports = router
