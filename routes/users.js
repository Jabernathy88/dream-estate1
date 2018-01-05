const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

router.get('/', (request, response) => {
  User.find({})
    .then((users) => {
      response.render('users/index', {
        users,
//        pageTitle: 'Banana'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

// POST, Create User
router.get('/new', (request, response) => {
  response.render('users/new', {/*pageTitle: 'New User'*/})
}) // need more steps
/*
router.post('/', (request, response) => {
  const newUser = request.body
  if(!newUser.photoUrl) {
    newUser.photoUrl = 'http://www.fillmurray.com/g/300/300'
  } */

// PUT, Edit User
router.get('/edit', (request, response) => {
  response.render('users/edit', {/*pageTitle: 'New User'*/})
}) // need more steps

// DELETE
router.get('/delete', (request, response) => { // add :wild back in
//  const userId = request.params.userId

//  User.findByIdAndRemove(userId)
//    .then(() => {
      response.redirect('/users')
//    })
//    .catch((error) => {
//      console.log(error)
//    })
})

// 3. Show Single User
router.get('/show', (request, response) => {
  response.render('users/show', {})
})

module.exports = router