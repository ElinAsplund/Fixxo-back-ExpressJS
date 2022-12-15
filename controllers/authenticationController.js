const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
const express = require('express')
const controller = express.Router()

const userSchema = require('../schemas/mongoDB/userSchema')
const { generateAccessToken } = require('../middlewares/authorization')

// UNSECURED ROUTES
// -------------------------------------------------------------------
controller.route('/register').post(async(req, res)=>{
    const { firstName, lastName, email, password } = req.body

    if(!firstName || !lastName || !email || !password){
        res.status(400).json({text: 'First name, last name, email and password are required.'})
    } 
    else {
        const user_exists = await userSchema.findOne({email})
        if(user_exists)
            res.status(409).json({text: 'A user with the same email already exists.'})
        else{
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
    
            const user = await userSchema.create({
                firstName,
                lastName,
                email,
                password: hashedPassword
            })
    
            if(user)
                res.status(201).json({text: `The user account was created successfully. You may now log in.`})
            else
                res.status(400).json({text: `Something went wrong, we could not create the user account.`})
        }
    }
})

controller.route('/login').post(async(req, res)=>{
    const { email, password } = req.body

    if(!email || !password)
        return res.status(400).json({text: 'Email and password are required.'})
    else{
        const user = await userSchema.findOne({email})
        if(user && await bcrypt.compare(password, user.password)){
            res.status(200).json({
                accessToken: generateAccessToken(user._id)
            })
        } else {
            res.status(400).json({text: `Incorrect email or password.`})
        }
    }
})

// SECURED ROUTES
// -------------------------------------------------------------------

module.exports = controller