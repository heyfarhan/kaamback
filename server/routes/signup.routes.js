const router = require("express").Router()

const { signup } = require("../controllers/signup.controllers")

router.post('/signup', signup)

module.exports = router