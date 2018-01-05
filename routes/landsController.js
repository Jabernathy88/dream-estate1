const express = require('express')
const router = express.Router({mergeParams: true})

router.get('/', (request, response) => {
  response.render('lands/index', {})
})

module.exports = router