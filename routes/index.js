var express = require('express')
var router = express.Router()
var db = require('../db')
var Student = require('../db').Student
var Teacher = require('../db').Teacher


router.get('/', function (req, res, next) {
  res.send('main route')
})


router.get('/students', (req, res, next) => {
  Student.findAll()
    .then(students => {
      res.send(students)
    })
    .catch(Error)
})

router.get('/teachers', (req, res, next) => {
  Teacher.findAll()
    .then(teacher => {
      res.send(teacher)
    })
    .catch(Error)
})

router.get('/students/:id', (req, res, next) => {
  console.log(req.params.id)
  Student.findById(req.params.id)
  .then(student => {
    res.send(student)
  })
  .catch(Error)
})

router.get('/teachers/:id', (req, res, next) => {
  console.log(req.params.id)
  Teacher.findById(req.params.id)
  .then(teacher => {
    res.send(teacher)
  })
  .catch(Error)
})


router.get('/teachers/:teachersId/students', (req, res, next) => {
  Teacher.findById(req.params.teachersId)
  .then(teacher => {
    Student.findAll({
      where: {
        teacherId: req.params.teachersId
      }
    })
    .then((students) => {
      res.send(students)
    })
  })
  .catch(Error)
})

router.delete('/delete/teacher/:id', (req, res, next) => {

  Teacher.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(removed => {
    res.status(202).send(req.params.id + ' has been removed')
  })
  .catch(Error)
})

router.put('/update/:student/:teachId', (req, res, next) => {
  Student.update(
    { teacherId: req.params.teachId
    }, {
      where: {name: req.params.student}
    })
    .then(() => {
    res.send('updated')
  })
})



module.exports = router
