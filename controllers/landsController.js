const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../db/models/User')
const Land = require('../db/models/Land')
const Home = require('../db/models/Home')
const siteTitle = require('../title')

router.get('/', (request, response) => {
  const userId = request.params.userId

  User.findById(userId)
    .then((user) => {
      response.render('lands/index', {
        userFullName: `${user.firstName} ${user.lastName}`,
        userId: user._id,
        lands: user.lands,
        pageTitle: 'lands'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/new', (request, response) => {
  const userId = request.params.userId

  response.render('lands/new', {
    userId,
    siteTitle,
    pageTitle: 'New Land'
  })
})

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
        landId,
        siteTitle,
        pageTitle: 'Land'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

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
        siteTitle,
        pageTitle: 'land'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.post('/', (request, response) => {
  const userId = request.params.userId
  const newLand = request.body

  User.findById(userId)
    .then((user) => {
      user.landLots.push(newLand)
      return user.save()
    })
    .then(() => {
      response.redirect(`/users/${userId}`)
    })
    .catch((error) => {
      console.log(error)
    })

})

module.exports = router