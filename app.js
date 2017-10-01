 const express = require('express');
 const app = express();
 const router = require('./routes')
 const db = require('./db').db;
 const Student = require('./db').Student;
 const Teacher = require('./db').Teacher;
 const chalk = require('chalk')
 var path = require('path');
 let PORT = 8080;


db.sync({
	force: true
})
.then(() => {
	return Student.bulkCreate([
		{ name: 'alex', gpa: 3 },
		{ name: 'brian', gpa: 2 },
		{ name: 'same', gpa: 4},
		{ name: 'jerry', gpa: 3 },
		{ name: 'nick', gpa: 1 },
	])
})
	.then(() => {
		return Teacher.bulkCreate([
			{name: 'mrs. schliening', subject: 'french'},
			{name: 'mr. knodel', subject: 'english'},
			{name: 'mrs. weir', subject: 'health'},
			{name: 'mr. fundis', subject: 'gym'},
			{name: 'mrs. karsek', subject: 'art'}
		])
		.then(() => {
	console.log('db synced')
	app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
	});
})

app.use('/', router)

 			function green(string) {
 				console.log(chalk.green(string))
 			}

 			function magenta(string) {
 				console.log(chalk.magenta(string))
 			}
