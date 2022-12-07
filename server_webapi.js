require('dotenv').config()
const port = process.env.WEBAPI_PORT || 6000
const mongoDBInit = require('./server_mongodb')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// controllers
app.use('/api/products', require('./controllers/productsController'))
// =
// const productsController = require('./controllers/productsController')
// app.use('/api/products', productsController)

app.use('/api/authentication', require('./controllers/authenticationController'))

// init
mongoDBInit()
app.listen(port, () => console.log(`Webapi is running on http://localhost:${port}`))