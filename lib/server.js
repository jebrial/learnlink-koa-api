import Koa from 'koa'
import router from './routes'

const app = new Koa()

app.use(router.routes())

app.listen(process.env.NODE_PORT || 3000, process.env.NODE_IP || 'localhost')
