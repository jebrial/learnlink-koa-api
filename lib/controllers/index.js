import { Classmate, Course } from '../models'

const classmate = {
	async getById(ctx){
		ctx.body = await Classmate.getById(ctx.params.id)
	},
	async getByEmail(ctx){
		ctx.body = await Classmate.getByEmail(ctx.params.email)
	}
}

export { classmate }
