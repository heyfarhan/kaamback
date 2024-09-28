const mongoose = require('mongoose')

const freelancerDetailSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    fullName: {
        type: String,
        require: true,
        lowercase: true
    },
    country: {
        type: String,
        require: true,
        lowercase: true
    },
    city: {
        type: String,
        require: true,
        lowercase: true
    },
    englishProficiency: {
        type: String,
        require: true,
        lowercase: true,
        enum: ['fluent', 'advance', 'intermediate', 'basic']
    },
    professionalExperience: {
        type: Number,
        require: true,
    },
    primaryJob: {
        type: String,
        require: true,
        lowercase: true,
    },
    primaryJobExperience: {
        type: Number,
        require: true,
    },
    worked: {
        type: String,
        enum: ['yes', 'no'],
        require: true,
    },
    skills: {
        type: [String],
        lowercase: true,
        require: true,
    },
    linkedIn: {
        type: String,
        lowercase: true,
    },
    profile: {
        type: String,
    },
    resume: {
        type: String,
    }

});

const FreelancerDetail = mongoose.model('FreelancerDetail', freelancerDetailSchema);

module.exports = FreelancerDetail