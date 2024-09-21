const mongoose = require("mongoose");

const CareerSchema = new mongoose.Schema({
    legalName: {
        type: String,
        required: [true, 'Legal name is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Legal name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
    },
    contactNumber: {
        type: String,
        required: [true, 'Contact number is required'],
        unique: true
    },
    currentCity: {
        type: String,
        required: [true, 'Current city is required'],
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'others'],
    },
    languages: {
        type: [String],
        required: true,
        validate: {
            validator: arrayLimit,
            message: 'You can specify up to 5 languages only.'
        }
    },
    workMode: {
        type: String,
        required: true,
        enum: ['remote', 'on-site', 'hybrid'],
        default: 'remote'
    },
    resume: {
        type: String,
        required: [true, 'Resume is required'],
        trim: true
    }
}, { timestamps: true });

function arrayLimit(val) {
    return val.length <= 5;
}

module.exports = mongoose.model("CareerApplication", CareerSchema);
