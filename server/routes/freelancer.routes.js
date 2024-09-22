const router = require('express').Router()

const { setFreelancer } = require('../controllers/freelancer.controllers')
const upload = require('../utils/multer')

router.post("/set-freelancer", upload.fields([{ name: "profile" }, { name: "resume" }]), setFreelancer)

module.exports = router