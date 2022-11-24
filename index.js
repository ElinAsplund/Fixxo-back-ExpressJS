const port = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


const productsController = require('./controllers/productsController')
app.use('/api/products', productsController)

app.listen(port, () => console.log(`Webapi is running on http://localhost:${port}`))