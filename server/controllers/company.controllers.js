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

const getJobs = async (req, res) => {

    try {
        const jobs = await JobPost.find({ postedBy: req.user._id }).populate('companyDetails', 'name address');
        res.status(200).json({
            success: true,
            jobs
        });
    } catch (error) {
        console.error('Error fetching jobs:', error.message);
        res.status(500).json({
            success: false,
            message: 'Error fetching jobs',
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

const updateApplicationStatus = async (req, res) => {
    try {
        const { applicationId, status } = req.body;
        if (!['shortlist', 'reject'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }
        const application = await Application.findById(applicationId);

        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        if (application.companyId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'You are not authorized to update this application' });
        }

        application.status = status;

        await application.save();

        return res.status(200).json({
            message: `Application has been ${status}`,
            application: application
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error });
    }
};

const updateCompanyDetails = async (req, res) => {
    try {
        const id = req.params.id; //comapnyDetailsId

        if (!req.body) {
            return res.status(400).json({
                message: "Data Not Received properly",
            });
        }
        if (req.file) {
            req.body.logo = req.file.filename;
        }
        const updatedData = await Companydetail.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).json({
                message: "Company not found",
            });
        }
        res.status(200).json({
            message: "Company details updated successfully",
            data: updatedData,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


module.exports = {
    setCompany,
    postJob,
    getJobs,
    getApplications,
    updateApplicationStatus,
    updateCompanyDetails
}