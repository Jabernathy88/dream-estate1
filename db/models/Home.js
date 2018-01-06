const Schema = require('../schema')
const mongoose = require('mongoose')

const Home = mongoose.model('Home', Schema.HomesSchema)
module.exports = Home 