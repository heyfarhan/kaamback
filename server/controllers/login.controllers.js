const User = require("../models/user.model")

const authVerify = async (req, res) => {

    res.status(200).json({
        success: true,
        user: req.user
    })
}



module.exports = {
    authVerify
}