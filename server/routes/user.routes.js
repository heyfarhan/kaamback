const router = require("express").Router()

const { forgotPassword, forgotPasswordOtpVerify, setNewPassword } = require("../controllers/user.controllers")
const authenticateToken = require("../middlewares/authenticateToken.middleware")

router.post('/forgot', forgotPassword)
router.post('/forgot-verify-otp', forgotPasswordOtpVerify)
router.post('/setpassword', authenticateToken, setNewPassword)

module.exports = router