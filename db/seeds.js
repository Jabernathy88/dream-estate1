require('dotenv').config()
const User = require('./models/User')
const Land = require('./models/Land')
const Home = require('./models/Home')

const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URI, {
//  useMongoClient: true
//})  // turn on if running seeds on Heroku

mongoose.connect('mongodb://localhost/dreams_db') // turn on if running local 

// connect and disconnect
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

//User.remove()
//.then(
//    console.log('All users removed.')
//).catch(err=>{
//    console.log(err)
//})

// create user seeds
const suzyUser = new User({
  name: 'Suzy',
  favColor: 'lavender'
})

const serenUser = new User({
  name: 'Serene Alami',
  favColor: 'magenta'
})

const sammyUser = new User({
  name: 'Sammy the Cat',
  favColor: 'pink'
})

// save seed users && their lands && homes on land
suzyUser.save()
  .then(user => {
    console.log(`${user.name} saved to database.`)
    return suzyUser.save()
  })
  .then(user => {
    console.log(`${user.name} saved to database.`)
    return serenUser.save()
  })
  // .then(user=>{
  //  console.log (`${user.name} saved to database.`)
  //  return kanyeUser.save()
  // })
  .then(user => {
    console.log(`${user.name} saved to database.`)
    return sammyUser.save()
  })
  .catch(err => {
    console.log('Sorry - error saving User seeds.')
    console.log(err)
  })

// trying re-gift syntax
User.remove({}).then(() => {
  const joshUser = new User({
    name: 'Josh Therrien',
    favColor: 'green'
  })
  const landOne = new Land({
    name: "Lot F03",
    type: "swamp",
    purchased: true
  })
  const homeOne = new Home({
    name: "642A Moreland",
    type: "family home",
    color: "brick",
    hasGarage: false,
    hasBigFrontYard: true,
    purchased: true
  })
  landOne.homes.push(homeOne)
  joshUser.landLots.push(landOne)
  console
  return joshUser.save()
})
  .then(user => {
    console.log(`${user.name} saved to database.`)
  })
  .catch((error) => {
    console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
    console.log(error)
  })
  .then(() => {
    mongoose.connection.close()
    console.log(`
      Finished seeding database...
      
      Disconnected from MongoDB
    `)
  })