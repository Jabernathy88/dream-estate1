const express = require('express')
const router = express.Router({mergeParams: true})
const siteTitle = require('../title')

const User = require('../db/models/User')

router.get('/:landId', (request, response) => {
  const userId = request.params.userId
  const landId = request.params.landId

  User.findById(userId)
    .then((user) => {
      const land = user.lands.id(landId)
      response.render('lands/show', {
        user,
        userId,
        pageTitle: 'land'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router