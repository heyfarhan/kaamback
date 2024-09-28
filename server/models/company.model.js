const mongoose = require('mongoose');

const CompanyDetailSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    logo: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String,
        trim: true,
        // match: [/^https?:\/\/[a-zA-Z0-9-_.]+\.[a-z]{2,}$/, 'Please enter a valid URL']
    },
    registrationNumber: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('CompanyDetail', CompanyDetailSchema);