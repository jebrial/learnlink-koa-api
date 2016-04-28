import koaRouter from 'koa-router'
import {classmate} from '../controllers'

const router = koaRouter()

router.get('/classmate/:id', classmate)

module.exports = router
