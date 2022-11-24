const express = require('express')
const controller = express.Router()
let products = require('../data/simulated_database')

// middleware
controller.param('id', (req, res, next, id) => {
    req.product = products.find(product => product.id == id)
    next()
})


// POST - CREATE - SKAPA EN PRODUKT - http://localhost:5000/api/products
controller.post('/', (request, response) => {
    let product = {
        id: (products[products.length-1])?.id > 0 ? (products[products.length-1])?.id + 1 : 1,
        articleNumber: request.body.articleNumber,
        name: request.body.name,
        description: request.body.description,
        category: request.body.category,
        price: request.body.price,
        rating: request.body.rating,
        imageName: request.body.imageName
    }

    products.push(product)
    response.status(201).json(product)
})

// GET - READ - HÄMTA ALLA PRODUKTER - http://localhost:5000/api/products
controller.get('/', (request, response) => {
    response.status(200).json(products)
})

// http://localhost:5000/api/products/1
controller.route('/:id')
.get((request, response) => {
    if (request.product != undefined)
        response.status(200).json(request.product)
    else
        response.status(404).json()
})
.put((request, response) => {
    if (request.product != undefined){
        ursers.forEach(product => {
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
        response.status(200).json(request.user)
    }
    else
        response.status(404).json()
})
.delete((request, response) => {
    if (request.user != undefined){
        products = products.filter(product => product.id !== request.product.id)
        response.status(204).json()
    }
    else
        response.status(404).json()
})

module.exports = controller


// export interface Product {
//     id?: number,
//     articleNumber: string,
//     name: string,
//     description?: string,
//     category: string,
//     price: number,
//     rating: number,
//     imageName: string,
//     initialPrice?: number
//   }
  
//   // "NÄR VI SKAPAR EN PRODUKT"?
//   export interface ProductRequest {
//     articleNumber: string,
//     name: string,
//     description?: string,
//     category: string,
//     price: number,
//     rating: number,
//     imageName: string,
//     initialPrice?: number
//   }