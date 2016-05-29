const SQL = {
	USER: {
		GET_BY_ID: 'SELECT * FROM users WHERE id=$1;',
		GET_BY_EMAIL: 'SELECT * FROM users WHERE email = lower($1);',
		ADD: 'INSERT INTO users(name,email,password) VALUES($1,lower($2),$3) returning id, created_at, updated_at;',
		DELETE: 'DELETE FROM users WHERE email=$1',
		LINKS: {
			GET_ALL: `SELECT ul.id, l.title, l.subject, l.url, ul.priority, ul.isvisited, ul.visitthreshold
				FROM userlinks ul
				JOIN links l
				ON ul.linkid = l.id
				JOIN user
				ON ul.userid = user.id
				WHERE  user.email=$1`,
			ADD: `INSERT INTO userlinks(userid, linkid, priority, isvisited, visitthreshold)
				VALUES($1, $2, $3, $4, $5) returning id;`
		}
	},
	LINK: {
		GET_BY_SUBJECT: 'SELECT * FROM links WHERE subject = lower($1);',
		ADD: `INSERT INTO links(title, subject, url)
		VALUES($1,$2,$3) returning id`,
		REMOVE: 'DELETE FROM links WHERE id=$1',
		UPDATE: `UPDATE links
		SET (title, subject, url, updated_at) = ($1,$2,$3,$4,$5,$6,$7)
		WHERE id=$8 returning id;`
	}
}

export default SQL
