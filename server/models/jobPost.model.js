const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({

    jobTitle: {
        type: String,
        required: true,
        trim: true
    },
    experienceYears: {
        type: String,
        required: true,
        trim: true
    },
    expectedSalary: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true,
    },
    jobType: {
        type: String,
        enum: ['Full-Time', 'Part-Time', 'Contract', 'Internship'],
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    recruitmentPeriod: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    companyDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyDetail',
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model("JobPost", jobPostSchema);