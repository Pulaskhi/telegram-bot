const express = require('express')
// carga las rutas de tu api
const router = express.Router()

router.use('/admin/users', require('./admin/users'))
router.use('/admin/customers', require('./admin/customers'))
router.use('/admin/bots', require('./admin/bots'))

module.exports = router
