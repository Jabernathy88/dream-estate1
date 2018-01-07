const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../db/models/User')
const Land = require('../db/models/Land')
const Home = require('../db/models/Home')
const siteTitle = require('../title')

router.get('/:landId', (request, response) => {
  const userId = request.params.userId
  const landId = request.params.landId

  User.findById(userId)
    .then((user) => {
      const land = user.landLots.id(landId)
      response.render('lands/show', {
        user,
        userId,
        land,
        homes: land.homes,
        siteTitle,
        pageTitle: 'land'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router