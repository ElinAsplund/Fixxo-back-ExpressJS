const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    tag: { type: mongoose.Schema.Types.String },
    name: { type: mongoose.Schema.Types.String, require: true },
    category: { type: mongoose.Schema.Types.String },
    price: { type: mongoose.Schema.Types.String, require: true },
    imageName: { type: mongoose.Schema.Types.String }
})

module.exports = mongoose.model("products", productSchema) 