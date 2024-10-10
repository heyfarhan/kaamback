const router = require('express').Router()

const { setFreelancer, jobFeed, applyForJob, getApplications } = require('../controllers/freelancer.controllers')
const upload = require('../utils/multer')

router.post("/set-freelancer", upload.fields([{ name: "profile" }, { name: "resume" }]), setFreelancer)
router.get('/feed', jobFeed)
router.post('/apply', applyForJob)
router.get('/getApplication', getApplications)

module.exports = router