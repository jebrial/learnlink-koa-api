import koaRouter from 'koa-router'
import { classmate } from '../controllers'

const router = koaRouter()

router.get('/classmate/:email', classmate.getByEmail)
router.get('/', (ctx) => {
	ctx.body = 'hello'
	ctx.status = 200
})

export default router
