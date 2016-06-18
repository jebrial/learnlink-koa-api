import dbCall from './db'
import SQL from './preparedStatements.js'
export const user = {
	id: '',
	name: '',
	email: '',
	password: '',
	createdAt: '',
	updatedAt: '',
	getById(id) {
		return dbCall(SQL.USER.GET_BY_ID,[id])
	},
	getByEmail(email) {
		return dbCall(SQL.USER.GET_BY_EMAIL, [email])
	},
	getLinks(email) {
		return dbCall(SQL.USER.LINKS.GET_ALL, [email])
	},
	addNew(user) {
		// need check for user props
		return dbCall(SQL.USER.ADD, [
			this.name,
			this.email,
			this.password
		])
	}
}

export const Link = {
	id: '',
	title: '',
	url: '',
	subject: '',
	createdAt: '',
	updatedAt: '',
	getBySubject(email) {
		return dbCall(SQL.LINKS.GET_BY_SUBJECT, [subject])
	},
	add(){
		return dbCall(SQL.LINKS.ADD, [
			this.title,
			this.subject,
			this.url
		])
	},
	remove(id){
		return dbCall(SQL.LINKS.REMOVE,[id])
	},
	update(id){
		return dbCall(SQL.LINKS.UPDATE,[])
	}
}
