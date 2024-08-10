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

    dateOfBirth: {
        type: Date,
        required: true,
    }

})

module.exports = mongoose.model('User', userSchema)