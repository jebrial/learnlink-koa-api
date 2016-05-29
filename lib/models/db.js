import pg from 'pg'
import dbConfig from '../../config'
const connectStr = dbConfig ? dbConfig.database.pg.connectStr : process.env.DB_CONNECT_STR

const dbCall = (queryStr, valueArr) => {
	return new Promise((resolve, reject) => {
		pg.connect(connectStr, ( err, client, done) => {
			if (err) {
				done()
				reject(err)
			}
			client.query(queryStr, valueArr, (err, result) => {
				done()
				if (err) {
					reject(err)
				}
				resolve(result.rows)
			})
		})
	})
}

export default dbCall
