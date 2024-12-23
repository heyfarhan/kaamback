const FreelancerDetail = require("../models/freelancer.model");
const JobPost = require("../models/jobPost.model");
const User = require("../models/user.model");
const Application = require("../models/application.model");

const setFreelancer = async (req, res) => {

    // console.log("body", req.body);
    // console.log("files", req.files);

    try {
        if (!req.body) {
            return res.status(400).json({
                success: false,
                message: "input error",
            });
        }
        const profileImage = req.files['profile'] ? req.files['profile'][0].filename : null;
        const resumeFile = req.files['resume'] ? req.files['resume'][0].filename : null;

        const details = await FreelancerDetail.findOne({ userId: req.user_id });

        if (details) {
            throw Error("Details Exist Already")
        }

        const freelancer = await FreelancerDetail.create({
            userId: req.user._id,
            fullName: req.body.fullName,
            country: req.body.country,
            city: req.body.city,
            englishProficiency: req.body.englishProficiency,
            professionalExperience: req.body.professionalExperience,
            primaryJob: req.body.primaryJob,
            primaryJobExperience: req.body.primaryJobExperience,
            worked: req.body.worked,
            skills: JSON.parse(req.body.skills),
            linkedIn: req.body.linkedIn,
            profile: profileImage,
            resume: resumeFile
        });

        await freelancer.save();

        const user = await User.findOneAndUpdate({ _id: req.user._id }, { freelancerDetail: freelancer._id });

        res.status(200).json({
            success: true,
            message: "Freelancer Details Added Successfully!",
            data: freelancer
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const jobFeed = async (req, res) => {

    try {
        const { page, limit } = req.query;

        const record = await JobPost.find()
            .sort({ 'updatedAt': -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit))
            .populate('companyDetails');

        const total = await JobPost.countDocuments();

        if (record.length === 0) {
            return res.status(404).json({
                message: false,
                error: "No job posts found."
            });
        }

        res.status(200).json({
            message: true,
            data: record,
            pagination: {
                currentPage: page,
                totalRecords: total
            }
        });

    } catch (error) {
        res.status(500).json({
            message: false,
            error: "Failed to fetch job posts. Please try again later.",
            details: error.message
        });
    }
};

const applyForJob = async (req, res) => {
    try {
        // console.log('Request Body:', req.body);

        const { jobId, companyId } = req.body;

        const newApplication = new Application({
            jobId,
            companyId,
            userId: req.user._id
        });

        await newApplication.save();

        // console.log('Application Saved:', newApplication);

        res.status(201).json({
            message: 'Application submitted successfully',
            application: newApplication
        });

    } catch (error) {

        // console.error('Error Saving Application:', error.message);

        if (error.code === 11000) {
            res.status(400).json({
                message: 'You have already applied to this job',
                error: error.message
            });
        } else {
            res.status(500).json({
                message: 'Error while submitting application',
                error: error.message
            });
        }

    }
};

const getApplications = async (req, res) => {
    try {

        const applications = await Application.find({ userId: req.user._id })
            .sort({ 'updatedAt': -1 })
            .populate('jobId')
            .populate('userId', '_id freelancerDetail')
            .populate('companyId', '_id companyDetail');

        res.status(200).json({
            message: 'Applications retrieved successfully',
            applications
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error while fetching applications',
            error: error.message
        });
    }
};


module.exports = {
    setFreelancer,
    jobFeed,
    applyForJob,
    getApplications
}