var express = require('express');
var router = express.Router();

// GET users, Idex Users 
router.get('/', function(req, res, next) {
  res.render('users/index', {})
})

// 2. POST, Create User

// PUT

// DELETE


// 3. Show Single User

// 4. 

// 5. 

module.exports = router