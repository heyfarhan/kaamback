const router = require('express').Router()

const { setCompany, postJob } = require('../controllers/company.controllers')
const upload = require('../utils/multer')

router.post("/set-company", upload.single('logo'), setCompany)
router.post('/postJob', postJob)

module.exports = router