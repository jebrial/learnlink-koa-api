const router = require('koa-router')()
const controllers = require('../controllers')

router.get('/user/:id', controllers.user)

module.exports = router
