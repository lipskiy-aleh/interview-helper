const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./src/routes')

const secure = require('./src/middlewares/secure')

const app = express()
const port = 3030

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

// TODO: change to send static files when user get root url
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', secure, routes)

app.use((err, req, res, next) => {
  res
    .status(err.status)
    .send({ message: err.message })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
