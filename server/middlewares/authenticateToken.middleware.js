const User = require("../models/user.model")

const jwt = require('jsonwebtoken')

const authenticateToken = async (req, res, next) => {

    try {

        const token = req.cookies.token

        if (!token) {
            throw Error("Cookie Token Not Present")
            return
        }

        const { id } = jwt.verify(token, process.env.JWT_SECRET)

        if (!id) {
            throw Error("No User _id Exists")
            return
        }

        req.user = {
            _id: id,
        }

        next()
    }
    catch (err) {

        if (err.name === 'TokenExpiredError') {
            err.message = 'Token expired'
        }

        res.status(403).json({ succcess: false, msg: err.message, user: null })
    }


}
module.exports = authenticateToken