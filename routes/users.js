const express = require('express')
const router = express.Router()

// GET users, Idex Users 
router.get('/', function(req, res, next) {
  res.render('users/index', {})
})

// POST, Create User
router.get('/new', (request, response) => {
  response.render('users/new', {/*pageTitle: 'New User'*/})
}) // need more steps

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