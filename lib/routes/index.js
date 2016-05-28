import koaRouter from 'koa-router'
import { classmate } from '../controllers'

const router = koaRouter()

router.get('/classmate/:email', classmate.getByEmail)
router.get('/', (ctx) => ctx.body={status: 200, message: 'in a bottle'})

export default router
