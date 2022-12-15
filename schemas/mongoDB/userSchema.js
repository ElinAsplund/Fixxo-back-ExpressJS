const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    firstName: {type: String, require: [true, 'please enter a first name']},
    lastName: {type: String, require: [true, 'please enter a last name']},
    email: {type: String, require: [true, 'please enter an email'], unique: true},
    password: {type: String, require: [true, 'please enter a password']}
})

module.exports = mongoose.model("users", userSchema)