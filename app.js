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
	force: true
})
	.then(() => {
		console.log('db synced')
		app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
	})
	.then(() => {
		Student.create({
		name: 'alex', gpa: 3
		})
		.then( alex => {
			Teacher.create({
				name: 'mr. snyder',
				subject: 'history'
			})
			.then(mrsnyder => {
				alex.setTeacher(mrsnyder)
			})
		})
})

	// return Student.bulkCreate([
	// 	{ name: 'alex', gpa: 3 },
	// 	{ name: 'brian', gpa: 2 },
	// 	{ name: 'same', gpa: 4},
	// 	{ name: 'jerry', gpa: 3 },
	// 	{ name: 'nick', gpa: 1 },
	// ])

function green(string){
	console.log(chalk.green(string))
}

function magenta(string){
	console.log(chalk.magenta(string))
}

