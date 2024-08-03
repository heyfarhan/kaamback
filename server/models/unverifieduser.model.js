const mongoose = require('mongoose')
const encrypt = require("../utils/encrypt")

const unverifieduserSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        require: true,
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
        expires: 5 * 60
    }

})

unverifieduserSchema.pre('save', async function (next) {

    const otp = String(Math.floor(Math.random() * 9000) + 1000)
    console.log(otp)

    this.password = await encrypt(this.password)
    this.otp = await encrypt(otp)

    next()
})

module.exports = mongoose.model('UnverifiedUser', unverifieduserSchema)