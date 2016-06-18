import Koa from 'koa'
import Router from './routes'
import morgan from 'koa-morgan'
import BodyParser from 'koa-bodyparser'

const app = new Koa()
app.use(morgan('dev'))
app.use(BodyParser())

app.use(async (ctx, next) => {
	try {
		await next()
	} catch (err) {
		ctx.body = {message: err.message}
		ctx.status = err.status || 500
	}
})

app.use(Router.routes())

app.listen(process.env.PORT || 3001)
