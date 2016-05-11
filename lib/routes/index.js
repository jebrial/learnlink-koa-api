import koaRouter from 'koa-router'
import { classmate } from '../controllers'

const router = koaRouter()

router.get('/classmate/:email', classmate.getByEmail)

export default router
