const router = require("express").Router()

const { signup, verifyOtp } = require("@/controllers/signup.controllers")

router.post('/signup', signup)
router.post('/verify-otp', verifyOtp)

module.exports = router