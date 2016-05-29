const SQL = {
	USER: {
		GET_BY_ID: 'SELECT * FROM users WHERE id=$1;',
		GET_BY_EMAIL: 'SELECT * FROM users WHERE email = lower($1);'
	},
	COURSE: {
		GET_ALL: 'SELECT * FROM links WHERE email = lower($1);',
		ADD: `INSERT INTO links(name, email, url, priority, checkoff, note)
		VALUES($1,$2,$3,$4,$5,$6) returning id`,
		REMOVE: 'DELETE FROM links WHERE id=$1',
		UPDATE: `UPDATE links
		SET (name, url, priority, checkoff, checkoff_time, note, updated_at) = ($1,$2,$3,$4,$5,$6,$7)
		WHERE id=$8 returning id;`
	}
}

export default SQL
