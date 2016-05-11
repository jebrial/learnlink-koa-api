import dbCall from './db'

export const Classmate = {
	id: '',
	name: '',
	email: '',
	password: '',
	createdAt: '',
	updatedAt: '',
	getById(id) {
		return dbCall('SELECT * FROM classmates WHERE id=$1;',[id])
	},
	getByEmail(email) {
		return dbCall('SELECT * FROM classmates WHERE email = lower($1);', [email])
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
		return dbCall('SELECT * FROM courses WHERE email = lower($1);', [email])
	},
	add(){
		return dbCall(
			`INSERT INTO courses(name, email, url, priority, checkoff, note)
			VALUES($1,$2,$3,$4,$5,$6) returning id`,
			[this.name, this.email, this.url, this.priority, this.isVisited, this.note])
	},
	remove(id){
		return dbCall('DELETE FROM courses WHERE id=$1',[id])
	},
	update(id){
		return dbCall(
				`UPDATE courses
				SET (name, url, priority, checkoff, checkoff_time, note, updated_at) = ($1,$2,$3,$4,$5,$6,$7)
				WHERE id=$8 returning id;`,
				[])
	}
}
