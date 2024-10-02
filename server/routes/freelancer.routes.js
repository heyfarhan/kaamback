const router = require('express').Router()

const { setFreelancer, jobFeed } = require('../controllers/freelancer.controllers')
const upload = require('../utils/multer')

router.post("/set-freelancer", upload.fields([{ name: "profile" }, { name: "resume" }]), setFreelancer)
router.get('/feed', jobFeed)

module.exports = router