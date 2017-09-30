 const express = require('express');
const app = express();

const db = require('./db').db;
const Student = require('./db').Student;
const Teacher = require('./db').Teacher;
const chalk = require('chalk')

let PORT = 8080;

app.get("/test", (req, res, next) => {
	// Visit http://localhost:8080/test to see the message!
	res.send("Hello GET Route!")
})
/*
 Your Route Code Here
*/

db.sync({
	// force: true
})
.then(() => {
	console.log('db synced')
	app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
})
.then(()=>{
		Student.findPerfect()
		.then(perfects =>{
			green(perfects[0].name)
		})
})
		// 	.then(() => {
		// 	Student.create({
		// 		name: 'Robert',
		// 		gpa: 4
		// 	})
		// })

function green(string){
	console.log(chalk.green(string))
}



