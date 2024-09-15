const router = require("express").Router()

const { authVerify, login, forgot,setnewpassword } = require("../controllers/login.controllers")
const authenticateToken = require("../middlewares/authenticateToken.middleware")
const { passwordchange } = require("../controllers/login.controllers")

router.get('/verify', authenticateToken, authVerify)
router.post('/login', login)
router.post('/forgot', forgot)
router.post('/passwordchange', passwordchange)
router.post('/setpassword', setnewpassword)

module.exports = router