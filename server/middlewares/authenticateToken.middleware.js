const User = require("@/models/user.model")
const jwt = require('jsonwebtoken')

const authenticateToken = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            throw Error("Cookie Token Not Present")
        }

        const { id } = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: id })

        if (!user) {
            throw Error("No User With this _id Exists")
            
        }

        req.user = {
            _id: user._id,
            name: user.name,
            email: user.email,
            dateOfBirth: user.dateOfBirth,
            role: user.role
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