const router = require('express').Router()

const upload = require('../utils/multer')

const { createOpening, getOpenings, getOpening, deleteOpening, applyForCareerJob } = require('../controllers/career.controllers')
const roleAccess = require('../middlewares/roleAccess.middleware')

router.post('/create', roleAccess(['ADMIN']), createOpening)
router.get('/openings', getOpenings)
router.get('/opening/:id', getOpening)
router.delete('/opening/:id', roleAccess(['ADMIN']), deleteOpening)
router.post('/apply/:id', upload.single("resume"), applyForCareerJob)

module.exports = router