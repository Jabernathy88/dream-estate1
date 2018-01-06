const Schema = require('../schema')
const mongoose = require('mongoose')

const User = mongoose.model('Home', Schema.HomesSchema)
module.exports = Home 