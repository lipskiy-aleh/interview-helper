const express = require('express')
const router = express.Router()

const db = require('../repositories/questionRepository')

// const configRoutes = require('./configsController')

// router.use('/configs', configRoutes.routes())

router.get('/', async function (req, res) {
    const result = await db.getAll()
    res.send(result)
})

router.post('/', async function (req, res) {
    const result = await db.create({text: 'Hello world'})
    res.send(result)
})

module.exports = router
