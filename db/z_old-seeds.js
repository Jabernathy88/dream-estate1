require('dotenv').config()
const User = require('./models/User')
const Land = require('./models/Land')
const Home = require('./models/Home')

const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URI, {
//  useMongoClient: true
//})  // turn on if running seeds on Heroku

mongoose.connect('mongodb://localhost/dreams_db') // turn on if running local 

mongoose.connection.once('open', () => {
  console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
  console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
  process.exit(-1)
})

User.remove()
.then(
    console.log('All users removed.')
).catch(err=>{
    console.log(err)
})

const suzyUser = new User({
    name: 'Suzy',
    favColor: 'lavender'
})

const joshUser = new User({
  name: 'Josh Therrien',
  favColor: 'green'
})

const serenUser = new User({
  name: 'Serene Alami',
  favColor: 'magenta'
})

const kanyeUser = new User({
  name: 'Kanye the Giant',
  favColor: 'cucumber'
})

const sammyUser = new User({
  name: 'Sammy the Cat',
  favColor: 'pink'
})

suzyUser.save()
.then(user=>{
    console.log (`${user.name} saved to database.`)
    return suzyUser.save()
})
.then(user=>{
  console.log (`${user.name} saved to database.`)
  return joshUser.save()
})
.then(user=>{
  console.log (`${user.name} saved to database.`)
  return serenUser.save()
})
.then(user=>{
  console.log (`${user.name} saved to database.`)
  return kanyeUser.save()
})
.then(user=>{
  console.log (`${user.name} saved to database.`)
  return sammyUser.save()
})
.catch(err=>{
    console.log('Sorry - error saving User seeds.')
    console.log(err)
})
