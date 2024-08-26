const mongoose = require('mongoose')
const encrypt = require("../utils/encrypt")
const sendOtp = require('../utils/sendOtp')

const unverifieduserSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        minlength: [3, 'name must be at least 3 characters long'],
        lowercase: true,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
        minlength: [3, 'email must be at least 3 characters long'],
    },

    password: {
        type: String,
        require: true,
        minlength: [8, 'password must be at least 8 characters long']
    },

    otp: {
        type: String,
        require: true,
    },

    iat: {
        type: Date,
        default: Date.now,
        expires: '24h'
    },

    dateOfBirth: {
        type: Date,
        required: true,
    },
    role: {
        type: String,
        enum: ['jobSeeker', 'company', 'ADMIN'],
        default: 'jobSeeker'
    }

})

unverifieduserSchema.pre('save', async function (next) {

    const otp = String(Math.floor(Math.random() * 9000) + 1000)
    console.log(otp)

    this.password = await encrypt(this.password)
    this.otp = await encrypt(otp)

    sendOtp(this.email, otp)

    next()
})

module.exports = mongoose.model('UnverifiedUser', unverifieduserSchema)