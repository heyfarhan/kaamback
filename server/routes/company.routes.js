const router = require('express').Router()

const { setCompany, postJob, getJobs, getApplications, updateApplicationStatus, updateCompanyDetails } = require('../controllers/company.controllers')
const upload = require('../utils/multer')

router.post("/set-company", upload.single('logo'), setCompany)
router.post('/postJob', postJob)
router.get('/getJobs', getJobs)
router.get('/getApplication', getApplications)
router.post('/updateApplication', updateApplicationStatus)
// router.post("/updateCompany/:id", upload.single('logo'), updateCompanyDetails)

module.exports = router