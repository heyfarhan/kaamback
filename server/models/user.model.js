const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

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
        enum: ['freelancer', 'company', 'ADMIN'],
        default: 'freelancer'
    }

})

module.exports = mongoose.model('User', userSchema)