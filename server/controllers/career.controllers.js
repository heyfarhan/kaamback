const Opening = require('@/models/opening.model')
const UserDetail = require('../models/userDetail.model')

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
                message: "Data received is not correct",
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

