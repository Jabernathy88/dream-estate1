const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

// show index view
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

// create user
router.get('/new', (request, response) => {
  response.render('users/new', {/*pageTitle: 'New User'*/ })
})

router.post('/', (request, response) => {
  const newUser = request.body

  User.create(newUser)
    .then(() => {
      response.redirect('/users')
    })
    .catch((error) => {
      console.log(error)
    })
})

// show :wild single user
router.get('/:userId', (request, response) => {
  const userId = request.params.userId
  User.findById(userId)
    .then((user) => {
      response.render('users/show', {
        user,
        pageTitle: user.name // implement this later
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

// show :wild/edit user page
router.get('/:userId/edit', (request, response) => {
  const userId = request.params.userId
  User.findById(userId)
    .then((user) => {
      response.render('users/edit', {
        user,
        pageTitle: 'Profile_Update' // later
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.put('/:userId', (request, response) => {
  const userId = request.params.userId
  const updatedUserInfo = request.body
  User.findByIdAndUpdate(userId, updatedUserInfo, { new: true })
    .then(() => {
      response.redirect(`/users/${userId}`)
    })
    .catch((error) => {
      console.log(error)
    })
})

// delete route
router.get('/:userId/delete', (request, response) => {
  const userId = request.params.userId

  User.findByIdAndRemove(userId)
    .then(() => {
      response.redirect('/users')
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router