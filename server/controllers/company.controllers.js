const CompanyDetail = require('../models/company.model');
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

module.exports = {
    setCompany
}