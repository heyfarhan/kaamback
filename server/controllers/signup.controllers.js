const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const UnverifiedUser = require('../models/unverifieduser.model')
const User = require('../models/user.model')
const validateOtp = require('../utils/validateOtp')

const signup = async (req, res) => {

    try {

        const { name, email, password, dateOfBirth } = req.body

        const user = await User.findOne({ email })

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

        res.status(202).json({
            success: true,
            user: { _id: unverifieduser._id, email: unverifieduser.email }
        })

    } catch (err) {

        res.status(400).json({
            success: false,
            user: null,
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

        const isValid = await validateOtp(otp, user);

        if (isValid) {
            await UnverifiedUser.deleteOne({ email })
            const newUser = await User.create({
                name: user.name,
                email: user.email,
                password: user.password,
                dateOfBirth: user.dateOfBirth
            })

            const token = jwt.sign(
                { id: newUser._id },
                process.env.JWT_SECRET,
                { expiresIn: '1h' });

            res.cookie('token', token, {
                httpOnly: true,
                // secure: true,
                domian: '.kaamback.com',
                maxAge: 60 * 60 * 1000,
            })

            res.status(201).json(
                {
                    success: isValid,
                    user: { _id: newUser._id, name: newUser.name, email: newUser.email, dateOfBirth: newUser.dateOfBirth }
                })

        }
        else {
            throw Error("Invalid Otp")
            return
        }

    }
    catch (err) {
        res.status(400).json({ success: "false", user: null, msg: err.message })
    }

}

module.exports = {
    signup,
    verifyOtp
}