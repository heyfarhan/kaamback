const Companydetail = require('../models/companydetail.model')

exports.companydetails =  async(req, res) => {
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
