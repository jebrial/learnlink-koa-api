import koaRouter from 'koa-router'
import { users } from '../controllers'

const router = koaRouter()

router.get('/users/:email', users.getByEmail)

router.get('/', (ctx) => {
	ctx.body = 'hello'
	ctx.status = 200
})

export default router
