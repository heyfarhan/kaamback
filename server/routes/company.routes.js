const router = require('express').Router()

const { setCompany } = require('../controllers/company.controllers')
const upload = require('../utils/multer')

router.post("/set-company", upload.single('logo'), setCompany)

module.exports = router