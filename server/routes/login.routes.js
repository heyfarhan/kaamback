const router = require("express").Router()

const { authVerify, login, forgotPassword, forgotPasswordOtpVerify, setNewPassword } = require("../controllers/login.controllers")
const authenticateToken = require("../middlewares/authenticateToken.middleware")

router.get('/verify', authenticateToken, authVerify)
router.post('/login', login)
router.post('/forgot', forgotPassword)
router.post('/forgot-verify-otp', forgotPasswordOtpVerify)
router.post('/setpassword', authenticateToken, setNewPassword)

module.exports = router