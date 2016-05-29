import koaRouter from 'koa-router'
import { users } from '../controllers'

const router = koaRouter()

router.get('/users/:email', users.getByEmail)
// router.post('/users')
// router.put('/users/:email')
// router.delete('/users/:email')

//TO DO: get links, notes, comments

// router.get('/users/:email/links')
// router.get('/users/:email/links/:id')
// router.post('/users/:email/links')
// router.put('/users/:email/links/:id')
// router.delete('/users/:email/links/:id')

export default router
