import dbCall from './db'

export default class Classmate {

	getOne(id) {
		return new Promise((resolve, reject) => {
			dbCall('SELECT * FROM classmates WHERE id=$1;',[id], (err, result) => {
				if (err) {
					console.log(`Error fetching classmate: ${err}`)
					reject(err)
				}
				resolve(result.rows[0])
			})
		})
	}
}
