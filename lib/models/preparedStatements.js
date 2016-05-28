const SQL = {
	USER: {
		GET_BY_ID: 'SELECT * FROM classmates WHERE id=$1;',
		GET_BY_EMAIL: 'SELECT * FROM classmates WHERE email = lower($1);'
	},
	COURSE: {
		GET_ALL: 'SELECT * FROM courses WHERE email = lower($1);',
		ADD: `INSERT INTO courses(name, email, url, priority, checkoff, note)
		VALUES($1,$2,$3,$4,$5,$6) returning id`,
		REMOVE: 'DELETE FROM courses WHERE id=$1',
		UPDATE: `UPDATE courses
		SET (name, url, priority, checkoff, checkoff_time, note, updated_at) = ($1,$2,$3,$4,$5,$6,$7)
		WHERE id=$8 returning id;`
	}
}

export default SQL
