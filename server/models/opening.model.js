const mongoose = require('mongoose')

const openingSchema = new mongoose.Schema({

    roleName: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    roleType: {
        type: String,
        required: true,
        lowercase: true,
    }
},
    {
        timestamps: true,
    })

module.exports = mongoose.model('Opening', openingSchema)

