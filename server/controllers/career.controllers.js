const Opening = require('../models/opening.model')
const UserDetail = require('../models/userDetail.model')
const CarrerApplication = require('../models/carrerapplication.model');
const ApplicationModel = require('../models/application.model')

exports.createOpening = async (req, res) => {
    try {
        const { roleName, roleType } = req.body
        const opening = await Opening.create({
            roleName,
            roleType
        })
        res.status(201).json({
            success: true,
            msg: "Opening Created Successfully",
            opening
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })

    }
}

exports.getOpenings = async (req, res) => {

    try {

        const openings = await Opening.find({}).sort({ createdAt: -1 })

        res.status(201).json({
            success: true,
            openings
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })

    }
}

exports.getOpening = async (req, res) => {
    try {
        const { id } = req.params;
        const openings = await Opening.findOne({ _id: id })
        res.status(201).json({
            success: true,
            openings
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })

    }
}

exports.deleteOpening = async (req, res) => {

    try {
        const { id } = req.params;

        const openings = await Opening.findOneAndDelete({ _id: id })

        res.status(201).json({
            success: true,
            msg: "Opening Deleted Successfully"
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })

    }
}

exports.userdetail = async (req, res) => {
    // console.log("body", req.body);
    // console.log("files", req.files);

    try {
        if (!req.body) {
            return res.status(400).json({
                success: false,
                message: "Data not recived correctly",
            });
        }

        const profileImage = req.files['profile'] ? req.files['profile'][0].filename : null;
        const resumeFile = req.files['resume'] ? req.files['resume'][0].filename : null;

        const usercreate = await UserDetail.create({
            fullName: req.body.fullName,
            country: req.body.country,
            city: req.body.city,
            englishProficiency: req.body.englishProficiency,
            professionalExperience: req.body.professionalExperience,
            primaryJob: req.body.primaryJob,
            primaryJobExperience: req.body.primaryJobExperience,
            worked: req.body.worked,
            skills: req.body.skills,
            linkedIn: req.body.linkedIn,
            profile: profileImage,
            resume: resumeFile
        });

        await usercreate.save();

        res.status(200).json({
            success: true,
            message: "User details created successfully!",
            data: usercreate
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.carrerapplication = async (req, res) => {
    try {
        if (!req.body || !req.file) {
            return res.status(400).json({
                status: false,
                message: "Required data not received properly"
            });
        }

        // console.log("Form Data:", req.body);
        // console.log("Uploaded File:", req.file);

        const { legalName, email, contactNumber, currentCity, gender, languages, workMode } = req.body;
        const resumePath = req.file.path;

        const careerRecord = new CarrerApplication({
            legalName,
            email,
            contactNumber,
            currentCity,
            gender,
            languages: languages,
            workMode,
            resume: resumePath,
        });

        await careerRecord.save();
        // console.log(careerRecord);
        return res.status(201).json({
            status: true,
            message: "Career application submitted successfully",
            data: careerRecord
        });
    } catch (error) {
        console.error("Error submitting application:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

exports.applicationsubmit = async (req, res) => {
    try {
        console.log('Request Body:', req.body);

        const { CompanyId, UserId, UserDetails, Status } = req.body;

        const newApplication = new ApplicationModel({
            CompanyId,
            UserId,
            UserDetails,
            Status
        });

        await newApplication.save();

        console.log('Application Saved:', newApplication);

        res.status(201).json({
            message: 'Application submitted successfully',
            application: newApplication
        });
    } catch (error) {
        console.error('Error Saving Application:', error.message);
        res.status(500).json({
            message: 'Error while submitting application',
            error: error.message
        });
    }
};

exports.getApplications = async (req, res) => {
    try {
        // const { userId, companyId, status } = req.query;
        console.log(req.query)

        const applications = await ApplicationModel.find(req.query)
            .populate('CompanyId', 'name address')
            .populate('UserId', 'name email phone resume');
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
