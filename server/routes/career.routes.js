const router = require('express').Router()

const { createOpening, getOpenings, getOpening, deleteOpening, userdetail } = require('../controllers/career.controllers')
const roleAccess = require('../middlewares/roleAccess.middleware')
const upload = require('../utils/multer')

router.post('/create', roleAccess(['ADMIN']), createOpening)
router.get('/openings', getOpenings)
router.get('/opening/:id', getOpening)
router.delete('/opening/:id', roleAccess(['ADMIN']), deleteOpening)
router.post("/userdetail", upload.fields([{ name: "profile" }, { name: "resume" }]), userdetail)


module.exports = router