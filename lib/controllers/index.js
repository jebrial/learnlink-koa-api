import { user, course } from '../models'

const User = {
	async getById(ctx){
		ctx.body = await user.getById(ctx.params.id)
	},
	async getByEmail(ctx){
		ctx.body = await user.getByEmail(ctx.params.email)
	},
	async add(ctx) {
		user.name = ctx.request.body.name
		user.email = ctx.request.body.email
		user.password = ctx.request.body.password
		ctx.body = await user.addNew()
	}
}

export { User }
