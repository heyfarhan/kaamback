const Opening = require('../models/opening.model')
const CareerApplication = require('../models/careerApplication.model')

const createOpening = async (req, res) => {

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
const getOpenings = async (req, res) => {

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
const getOpening = async (req, res) => {

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
const deleteOpening = async (req, res) => {

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

const applyForCareerJob = async (req, res) => {
    try {
        const { id } = req.params;

        // console.log("Form Data:", req.body);
        // console.log("Uploaded File:", req.file);

        if (!req.body || !req.file) {
            return res.status(400).json({
                status: false,
                message: "input error"
            });
        }

        const { legalName, email, contactNumber, currentCity, gender, languages, workMode } = req.body;
        const resumePath = req.file.path;

        const careerRecord = new CareerApplication({
            openingId: id,
            legalName,
            email,
            contactNumber,
            currentCity,
            gender,
            languages: JSON.parse(req.body.languages),
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

        // console.error("Error submitting application:", error);

        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

module.exports = {
    createOpening,
    getOpenings,
    getOpening,
    deleteOpening,
    applyForCareerJob
}