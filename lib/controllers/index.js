import { User, Course } from '../models'

const users = {
	async getById(ctx){
		ctx.body = await User.getById(ctx.params.id)
	},
	async getByEmail(ctx){
		ctx.body = await User.getByEmail(ctx.params.email)
	}
}

export { users }
