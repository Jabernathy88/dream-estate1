const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../db/models/User')
const Land = require('../db/models/Land')
const Home = require('../db/models/Home')
const siteTitle = require('../title')

router.get('/new', (request, response) => {
  const userId = request.params.userId
  const landId = request.params.landId

  User.findById(userId)
    .then((user) => {
      const land = user.landLots.id(landId)

      response.render('homes/new', {
        user,
        userId,
        land,
        landId,
        siteTitle,
        pageTitle: 'New_home'
      })
    })
})

router.post('/', (request, response) => {
  const userId = request.params.userId
  const landId = request.params.landId

  const newHome = request.body

  User.findById(userId)
    .then((user) => {
      const land = user.landLots.id(landId)
      land.homes.push(newHome)

      return user.save()
    })
    .then(() => {
      response.redirect(`/users/${userId}/lands/${landId}`)
    })
})

router.get('/:homeId', (request, response) => {
  const userId = request.params.userId
  const landId = request.params.landId
  const homeId = request.params.homeId

  User.findById(userId)
    .then((user) => {
      const land = user.lands.id(landId)
      const home = land.homelandturn.id(homeId)

      response.render('homes/show', {
        userId,
        land,
        home,
        pageTitle: 'homes'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/:homeId/delete', (request, response) => {
  const userId = request.params.userId
  const landId = request.params.landId
  const homeId = request.params.homeId

  User.findById(userId)
    .then((user) => {
      const land = user.lands.id(landId)
      land.homelandturn.id(homeId).remove()

      return user.save()
    })
    .then(() => {
      response.redirect(`/users/${userId}/lands/${landId}`)
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router