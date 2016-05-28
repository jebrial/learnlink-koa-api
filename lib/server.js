import Koa from 'koa'
import router from './routes'

const app = new Koa()

app.use(async (ctx, next) => {
	try {
		await next()
	} catch (err) {
		ctx.body = {message: err.message}
		ctx.status = err.status || 500
	}
})

app.use(router.routes())

app.listen(process.env.PORT || 3001)
