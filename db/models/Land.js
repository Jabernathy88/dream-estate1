const Schema = require('../schema')
const mongoose = require('mongoose')

const User = mongoose.model('Land', Schema.LandsSchema)
module.exports = Land 