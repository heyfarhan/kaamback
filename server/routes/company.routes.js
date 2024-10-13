const router = require("express").Router()
const { companydetails, jobpost, Jobfeed, companydetailsupdate, postedbycompany, applicationUpdate } = require("../controllers/company.controllers")
const upload = require('../utils/multer')

router.post('/companydetails', upload.single('img'), companydetails)
router.put('/companydetails-update/:id', upload.single('logo'), companydetailsupdate);
router.post('/company-jobpost', jobpost)
router.get('/jobs', Jobfeed)
router.get('/fetch_companyjobs/:companyid', postedbycompany)
router.post('/application_status',applicationUpdate)

module.exports = router