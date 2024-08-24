const router = require("express").Router()

const { authVerify } = require("../controllers/login.controllers")

router.get('/verify', authVerify)

module.exports = router