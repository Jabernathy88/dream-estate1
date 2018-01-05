require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// Creating new Express app
const app = express()

app.set('view engine', 'hbs')

app.use(express.static('public'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// Mongo connection set-up
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

// Registering controllers
const users = require('./routes/users')
app.use('/users', users)

const landsController = require('./routes/landsController')
app.use('/users/lands/', landsController) // need to add :wild back

// my other controllers go here

// Automatically redirect to the Users page on load
app.get('/', (request, response) => {
  response.redirect('/users')
})

// Starting server
//const PORT = process.env.PORT || 3000
//app.listen(PORT, () => {
//  console.log(`Express app listening on port ${PORT}`)
//})

module.exports = app 