const router = require("express").Router()
const { companydetails, jobpost, Jobfeed } = require("../controllers/company.controllers")
const upload = require('../utils/multer')

router.post('/companydetails', upload.single('img'), companydetails)
router.post('/company-jobpost', jobpost)
router.get('/jobs', Jobfeed)

module.exports = router