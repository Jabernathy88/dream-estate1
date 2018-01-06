const Schema = require('../schema')
const mongoose = require('mongoose')

const Land = mongoose.model('Land', Schema.LandsSchema)
module.exports = Land 