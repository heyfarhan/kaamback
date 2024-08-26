const router = require("express").Router()

const { authVerify } = require("../controllers/login.controllers")
const authenticateToken = require("../middlewares/authenticateToken.middleware")

router.get('/verify', authenticateToken, authVerify)

module.exports = router