const express = require('express')
const router = express.Router()

// const configRoutes = require('./configsController')

// router.use('/configs', configRoutes.routes())

router.get('/', function (req, res) {
    res.send('Hello world with module')
})

module.exports = router
