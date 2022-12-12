const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    tag: {type: String},
    name: {type: String, require: true},
    category: {type: String},
    price: {type: Number, require: true},
    imageName: {type: String}
})

module.exports = mongoose.model("products", productSchema) 