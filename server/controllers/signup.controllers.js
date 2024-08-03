const mongoose = require('mongoose')
const UnverifiedUser = require('../models/unverifieduser.model')


const signup = async (req, res) => {

    const { email, password } = req.body

    //TO BE CHANGED TO USER

    try {
        const user = await UnverifiedUser.findOne({ email })

        if (user) {
            throw Error("User Already Exist")
        }

        const unverifieduser = await UnverifiedUser.create({
            email,
            password
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

module.exports = {
    signup
}