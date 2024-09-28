const mongoose = require('mongoose');

const PostJobSchema = new mongoose.Schema({
    JobTitle: {
        type: String,
        required: true,
        trim: true
    },
    Experience_Years: {
        type: String,
        required: true,
        trim: true
    },
    Expected_Salary: {
        type: Number,
        required: true,
    },
    Duration: {
        type: String,
        required: true
    },
    Skills: {
        type: String,
        required: true,
        trim: true
    },
    JobType: {
        type: String,
        enum: ['Full-Time', 'Part-Time', 'Contract', 'Internship'],
        required: true
    },
    Location: {
        type: String,
        required: true,
        trim: true
    },
    Department: {
        type: String, 
        required: true,
        trim: true
    },
    Recruitment_Period: {
        type: String,  
        required: true,
        trim: true
    },
    PostedDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    CompanyDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyDetail',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Jobpost", PostJobSchema);
