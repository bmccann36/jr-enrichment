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


const Teacher = db.define('teacher', {
	name: Sequelize.STRING,
	subject: Sequelize.STRING
});

Student.belongsTo(Teacher)


module.exports = {db, Student, Teacher}


