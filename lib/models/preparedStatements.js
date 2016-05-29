const SQL = {
	USER: {
		GET_BY_ID: 'SELECT * FROM users WHERE id=$1;',
		GET_BY_EMAIL: 'SELECT * FROM users WHERE email = lower($1);',
		ADD: 'INSERT INTO users(name,email,password) VALUES($1,lower($2),$3) returning id, created_at, updated_at;',
		DELETE: 'DELETE FROM users WHERE email=$1',
		LINKS: {
			GET_ALL: `SELECT ul.id, l.title, l.subject, l.url, ul.priority, ul.checkoff, ul.checkoffthreshold
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
		SET (title, subject, url, updated_at) = ($1,$2,$3,$4)
		WHERE id=$5 returning id;`
	}
}

export default SQL
/*
CREATE TABLE "users" (
	id bigserial primary key,
	name varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	password varchar(200) NOT NULL,
	created_at timestamp DEFAULT current_timestamp,
	updated_at timestamp DEFAULT current_timestamp,
	unique(email)
);

CREATE TABLE "links" (
	id bigserial primary key,
	title varchar(100) NOT NULL,
	subject varchar(100) NOT NULL,
	url varchar(100) NOT NULL,
	created_at timestamp DEFAULT current_timestamp,
	updated_at timestamp DEFAULT current_timestamp
);

CREATE TABLE "userlinks" (
	id bigserial primary key,
	userid bigserial NOT NULL,
	linkid bigserial NOT NULL,
	priority integer NOT NULL DEFAULT 0,
	checkoff timestamp DEFAULT NULL,
	checkoffthreshold int NOT NULL,
	created_at timestamp DEFAULT current_timestamp,
	updated_at timestamp DEFAULT current_timestamp
);

CREATE TABLE "notes" (
	id bigserial primary key,
	userid bigserial references users,
	userlinkid bigserial references userlinks,
	linkid bigserial references links,
	entry text NOT NULL,
	created_at timestamp DEFAULT current_timestamp,
	updated_at timestamp DEFAULT current_timestamp
);

CREATE TABLE "comments" (
	id bigserial primary key,
	noteid bigserial references notes,
	userid bigserial references users,
	entry text NOT NULL,
	created_at timestamp DEFAULT current_timestamp,
	updated_at timestamp DEFAULT current_timestamp,
);

*/
