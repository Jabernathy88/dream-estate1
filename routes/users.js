const express = require('express')
const router = express.Router()

// GET users, Idex Users 
router.get('/', function(req, res, next) {
  res.render('users/index', {})
})

// 2. POST, Create User
router.get('/new', (request, response) => {
  response.render('users/new', {/*pageTitle: 'New User'*/})
})

// PUT

// DELETE


// 3. Show Single User
router.get('/show', (request, response) => {
  response.render('users/show', {})
})


// 4. 

// 5. 

module.exports = router