const jwt = require('jsonwebtoken')

const User = require("../models/user.model")

const authVerify = async (req, res) => {

    try {

        const token = req.cookies.token

        if (!token) {
            throw Error("Cookie Token Not Present")
            return
        }

        const { id } = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findOne({ _id: id })

        if (!user) {
            throw Error("No User With this _id Exists")
            return
        }

        res.status(200).json({
            success: true,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                dateOfBirth: user.dateOfBirth
            }
        })
    }
    catch (err) {

        if (err.name === 'TokenExpiredError') {
            err.message = 'Token expired'
        }

        res.status(400).json({ succcess: false, msg: err.message, user: null })
    }

}

module.exports = {
    authVerify
}