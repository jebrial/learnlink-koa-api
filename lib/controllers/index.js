import User from '../models'

export const user = async (ctx, next) => {
	let user = new User().getOne()
	ctx.body = user
	await next()
}
