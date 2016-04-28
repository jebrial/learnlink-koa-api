import Classmate from '../models'

export const classmate = async (ctx, next) => {
	let classmate = new Classmate()
	ctx.body = await classmate.getOne(ctx.params.id)
}
