const router = require('express').Router()

const { createOpening,getOpenings, getOpening, deleteOpening} = require('../controllers/career.controllers')
const roleAccess = require('../middlewares/roleAccess.middleware')

router.post('/create', roleAccess(['ADMIN']), createOpening)
router.get('/openings', getOpenings)
router.get('/opening/:id', getOpening)
router.delete('/opening/:id', roleAccess(['ADMIN']), deleteOpening)

module.exports = router