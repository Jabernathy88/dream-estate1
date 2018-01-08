require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.set('view engine', 'hbs')

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

const favicon = require('serve-favicon') 
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
})

mongoose.connection.once('open', () => {
  console.log('Mongoose has connected to MongoDB!')
})

mongoose.connection.on('error', (error) => {
  console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
  process.exit(-1)
})

const users = require('./controllers/usersController')
app.use('/users', users)

const lands = require('./controllers/landsController')
app.use('/users/:userId/lands', lands) 

const homes = require('./controllers/homesController')
app.use('/users/:userId/lands/:landId/homes', homes)

app.get('/', (request, response) => {
  response.redirect('/users')
})

module.exports = app