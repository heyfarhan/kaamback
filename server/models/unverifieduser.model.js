const mongoose = require('mongoose')

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
        type: Number,
        require: true,
        default: function () {
            return Math.floor(Math.random() * 9000) + 1000;
        }
    },
    iat: {
        type: Date,
        default: Date.now,
        expires: 5 * 60
    }
})

module.exports = mongoose.model('UnverifiedUser', unverifieduserSchema)