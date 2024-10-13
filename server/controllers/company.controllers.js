const Companydetail = require('../models/companydetail.model');
const Jobpost = require('../models/postjob.model')
const Application = require('../models/application.model')

exports.companydetails = async (req, res) => {
    try {
        const { name, address, email, phone, website, registrationNumber, industry, description } = req.body;

        const logo = req.file ? req.file.filename : null;

        const companydetails = new Companydetail({
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

        const savedCompany = await companydetails.save();
        console.log(savedCompany);
        res.status(201).json(savedCompany);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};

exports.companydetailsupdate = async (req, res) => {
    // console.log('ID:', req.params.id);
    // console.log('Request Body:', req.body);
    // console.log('Uploaded File:', req.file);

    try {
        const id = req.params.id;

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

exports.jobpost = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Please provide all the required fields.' });
    }
    try {

        const {
            JobTitle,
            Experience_Years,
            Expected_Salary,
            Duration,
            Skills,
            JobType,
            Location,
            Department,
            Recruitment_Period,
            CompanyDetails
        } = req.body;


        const newJobPost = new Jobpost({
            JobTitle,
            Experience_Years,
            Expected_Salary,
            Duration,
            Skills,
            JobType,
            Location,
            Department,
            Recruitment_Period,
            CompanyDetails
        });

        const savedJobPost = await newJobPost.save();

        res.status(201).json({
            message: 'Job post created successfully!',
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

exports.Jobfeed = async (req, res) => {
    try {
        const { page, limit } = req.query;

        const record = await Jobpost.find()
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Jobpost.countDocuments();

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

exports.postedbycompany = async (req, res) => {
    console.log(req.params);
    try {
        const jobs = await Jobpost.find({ companyDetails: req.params }).populate('companyDetails', 'name address');
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

exports.applicationUpdate = async (req, res) => {
    try {
        const { applicationId, status } = req.body;

        if (!['shortlisted', 'rejected'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }

        const application = await Application.findByIdAndUpdate(
            applicationId,
            { status: status },
            { new: true }
        );

        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        return res.status(200).json({
            message: `Application has been ${status}`,
            application: application
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error });
    }
};
