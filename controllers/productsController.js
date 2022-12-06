const express = require('express')
const controller = express.Router()
const productSchema = require('../schemas/productSchema')
let products = require('../data/simulated_database')

// MIDDLEWARE
// -------------------------------------------------------------------
controller.param('id', (req, res, next, id) => {
    req.product = products.find(product => product.id == id)
    next()
})

controller.param('tag', (req, res, next, tag) => {
    req.products = products.filter(product => product.tag == tag)
    next()
})

// CRUD: CREATE. READ. UPDATE. DELETE.
// -------------------------------------------------------------------

// UNSECURED ROUTES
// -------------------------------------------------------------------

// READ - GET 
controller.get('/', async (req, res) => {
    const products = []
    const list = await productSchema.find()
    if(list){
        for(let product of list){
            products.push({
                id: product._id,
                tag: product.tag,
                name: product.name,
                category: product.category,
                price: product.price,
                imageName: product.imageName
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})

// READ - GET 
controller.get('/details/:id', async (req, res) => {
    const product = await productSchema.findById(req.params.id)
    if(product){
        res.status(200).json({
            id: product._id,
            tag: product.tag,
            name: product.name,
            category: product.category,
            price: product.price,
            imageName: product.imageName            
        })
    } else
        res.status(404).json()
})

// READ - GET 
controller.get('/:tag', async (req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag })
    if(list){
        for(let product of list){
            products.push({
                id: product._id,
                tag: product.tag,
                name: product.name,
                category: product.category,
                price: product.price,
                imageName: product.imageName
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})

// READ - GET 
controller.get('/:tag/take=:amount', async (req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag }).limit(req.params.amount)
    if(list){
        for(let product of list){
            products.push({
                id: product._id,
                tag: product.tag,
                name: product.name,
                category: product.category,
                price: product.price,
                imageName: product.imageName
            })
        }   
        res.status(200).json(products)
    } else
        res.status(400).json()
})

// -------------------------------------------------------------------

// SECURED ROUTES
// -------------------------------------------------------------------

// CREATE - POST 
controller.post('/', async (req, res) => {
    const { tag, name, category, price, imageName } = req.body

    if( !name || !price )
        res.status(400).json({text: 'name and price are required.'})

    const product_exists = await productSchema.findOne({name})
    if(product_exists)
        res.status(409).json({text: 'a product with the same name already exists'})
    else{
        const product = await productSchema.create({
            tag,
            name,
            category,
            price,
            imageName
        })
        if(product)
            res.status(201).json({text: `the product with article number ${product._id} was created successfully.`})
        else
            res.status(400).json({text: 'something went wrong, we could not create the product.'})
    }
})

// UPDATE - PUT
controller.put('/details/:id', (request, response) => {
    if (request.product != undefined){
        products.forEach(product => {
            if (product.id == request.product.id){
                product.articleNumber = request.body.articleNumber ? request.body.articleNumber : product.articleNumber
                product.name = request.body.name ? request.body.name : product.name
                product.description = request.body.description ? request.body.description : product.description
                product.category = request.body.category ? request.body.category : product.category
                product.price = request.body.price ? request.body.price : product.price
                product.rating = request.body.rating ? request.body.rating : product.rating
                product.imageName = request.body.imageName ? request.body.imageName : product.imageName
            }
        })
        response.status(200).json(request.product)
    }
    else
        response.status(404).json()
})

// DELETE - DELETE 
controller.delete('/details/:id', async (req, res) => {
    if(!req.params.id)
        res.status(400).json('no article number was specified.')
    else{
        const product = await productSchema.findById(req.params.id)
        if(product){
            await productSchema.remove(product)
            res.status(200).json({text: `the product with article number ${req.params.id} was deleted successfully.`})
        } else{
            res.status(404).json({text: `the product with article number ${req.params.id} was not found.`})
        }
    }
})

module.exports = controller