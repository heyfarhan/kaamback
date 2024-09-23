const router = require("express").Router()
const { companydetails } = require("../controllers/company.controllers")
const upload = require('../utils/multer')

router.post('/companydetails', upload.single('img'), companydetails)

module.exports = router