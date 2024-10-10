const Application = require('../models/application.model');
const CompanyDetail = require('../models/company.model');
const JobPost = require('../models/jobPost.model');
const User = require('../models/user.model');

const setCompany = async (req, res) => {

    try {

        if (!req.body) {
            return res.status(400).json({
                success: false,
                message: "input error",
            });
        }

        const details = await CompanyDetail.findOne({ userId: req.user._id });

        if (details) {
            throw Error("Details Exist Already")
        }

        const { name, address, email, phone, website, registrationNumber, industry, description } = req.body;

        const logo = req.file ? req.file.filename : null;

        const companyDetails = new CompanyDetail({
            userId: req.user._id,
            name,
            address,
            email,
            phone,
            website,
            registrationNumber,
            industry,
            description,
            logo
        });

        await companyDetails.save();
        const user = await User.findOneAndUpdate({ _id: req.user._id }, { role: 'company', companyDetail: companyDetails._id })

        res.status(201).json(companyDetails);

    } catch (error) {

        // console.error(error);
        res.status(400).json({ message: error.message });

    }
};

const postJob = async (req, res) => {

    if (!req.body) {
        return res.status(400).json({ message: 'Please provide all the required fields.' });
    }

    //add restriction to only job can be posted by company

    try {

        const {
            jobTitle,
            experienceYears,
            expectedSalary,
            duration,
            skills,
            jobType,
            location,
            department,
            recruitmentPeriod,
            description,
            companyDetails
        } = req.body;

        const newJobPost = new JobPost({
            jobTitle,
            experienceYears,
            expectedSalary,
            duration,
            skills,
            jobType,
            location,
            department,
            recruitmentPeriod,
            description,
            companyDetails,
            postedBy: req.user._id
        });

        const savedJobPost = await newJobPost.save();

        res.status(201).json({
            message: 'Job posted successfully!',
            jobPost: savedJobPost
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to create job post. Please try again later.',
            error: error.message
        });
    }
};

const getApplications = async (req, res) => {
    try {

        const applications = await Application.find({ companyId: req.user._id })
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
    setCompany,
    postJob,
    getApplications
}