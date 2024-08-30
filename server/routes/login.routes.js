const router = require("express").Router()

const { authVerify, login } = require("../controllers/login.controllers")
const authenticateToken = require("../middlewares/authenticateToken.middleware")

router.get('/verify', authenticateToken, authVerify)
router.post('/login', login)

module.exports = router