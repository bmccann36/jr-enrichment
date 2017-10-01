  /*



  return Student.bulkCreate([
		{ name: 'alex', gpa: 3 },
		{ name: 'brian', gpa: 2 },
		{ name: 'same', gpa: 4},
		{ name: 'jerry', gpa: 3 },
		{ name: 'nick', gpa: 1 },
	])
	.then(() => {
		return Teacher.bulkCreate([
			{name: 'mrs. schliening', subject: 'french'},
			{name: 'mr. knodel', subject: 'english'},
			{name: 'mrs. weir', subject: 'health'},
			{name: 'mr. fundis', subject: 'gym'},
			{name: 'mrs. karsek', subject: 'art'}
  	])

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

  Student.findById(1)
  .then( student => {
    Teacher.findById(1)
    .then(teacher => {
      student.setTeacher(teacher)
    })
  })






