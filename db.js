const Sequelize = require('sequelize');


const db = new Sequelize('postgres://localhost/juniorenrichment', {
  logging: false
});


const Student = db.define('student', {
	name: Sequelize.STRING,
	gpa: Sequelize.INTEGER
})

Student.prototype.getLetter = function(){
	if (this.gpa >= 3) return 'A'
	else if (this.gpa >= 2) return 'B'
	else if (this.gpa >= 1) return 'C '
}

Student.findPerfect = function(){
	return this.findAll({
		where: {gpa: 4}
	})
}

// Page.findByTag = function (tag) {
// 	return this.findAll({
// 			where: {
// 					tags: {
// 							$contains: [tag]
// 					}
// 			}
// 	});


const Teacher = db.define('teacher', {
	name: Sequelize.STRING,
	subject: Sequelize.STRING
});

Student.belongsTo(Teacher)


module.exports = {db, Student, Teacher}


// Student.prototype.getLetter = function () {
// 	return
// 	let letGrade;
// 	let intGrade = this.gpa
// 	if (intGrade >= 3) letGrade = 'A'
// 	else if (intGrade >= 2) letGrade = 'B'
// 	return letGrade
// }
