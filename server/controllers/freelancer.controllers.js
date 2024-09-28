const FreelancerDetail = require("../models/freelancer.model");
const User = require("../models/user.model");

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

module.exports = {
    setFreelancer
}