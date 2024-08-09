const mongoose = require('mongoose')
const UnverifiedUser = require('../models/unverifieduser.model')
const validateOtp = require('../utils/validateOtp')

const signup = async (req, res) => {

    try {

        const { name, email, password, dateOfBirth } = req.body

        //TO BE CHANGED TO USER
        const user = await UnverifiedUser.findOne({ email })

        if (user) {
            throw Error("User Already Exist")
        }

        const [year, month, day] = dateOfBirth.split('-');

        const unverifieduser = await UnverifiedUser.create({
            name,
            email,
            password,
            dateOfBirth: new Date(Date.UTC(year, month - 1, day))
        })

        res.json({
            success: true,
            user: { _id: unverifieduser._id, email: unverifieduser.email }
        })

    } catch (err) {

        res.json({
            success: false,
            error: err.message
        })

    }

}

const verifyOtp = async (req, res) => {

    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            throw Error("Invalid Request")
            return
        }

        const user = await UnverifiedUser.findOne({ email });

        if (!user) {
            throw Error("Invalid Email")
            return
        }

        const valid = await validateOtp(otp, user);

        console.log(email, otp)

        res.json({ success: "true" })

    }
    catch (err) {
        res.json({ success: "false", msg: err.message })
    }

}

module.exports = {
    signup,
    verifyOtp
}