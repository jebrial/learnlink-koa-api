import koaRouter from 'koa-router'
import { User } from '../controllers'

const Router = new koaRouter({prefix: '/api'})

Router.get('/user/:email', User.getByEmail)
Router.post('/user', User.add)
// router.put('/user/:email')
// router.delete('/user/:email')

//TO DO: get links, notes, comments

// router.get('/user/:email/links')
// router.get('/user/:email/links/:id')
// router.post('/user/:email/links')
// router.put('/user/:email/links/:id')
// router.delete('/user/:email/links/:id')

export default Router
