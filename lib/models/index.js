import dbCall from './db'
import SQL from './preparedStatements.js'
export const User = {
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
	}
}

export const Course = {
	id: '',
	name: '',
	url: '',
	note: '',
	priority: '',
	isVisited: '',
	visitedAt: '',
	createdAt: '',
	updatedAt: '',
	getAll(email) {
		return dbCall(SQL.COURSE.GET_ALL, [email])
	},
	add(){
		return dbCall(SQL.COURSE.ADD, [
			this.name,
			this.email,
			this.url,
			this.priority,
			this.isVisited,
			this.note])
	},
	remove(id){
		return dbCall(SQL.COURSE.REMOVE,[id])
	},
	update(id){
		return dbCall(SQL.COURSE.UPDATE,[])
	}
}
