require('dotenv').config()
const User = require('./models/User')
const Land = require('./models/Land')
const Home = require('./models/Home')

const mongoose = require('mongoose')

 mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
})  // turn on if running seeds on Heroku

// mongoose.connect('mongodb://localhost/dreams_db') // turn on if running local 

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

// 1. suzy 
User.remove({}).then(() => {
  const suzyUser = new User({
    name: 'Suzy',
    favColor: 'lavender'
  })
  const landOne = new Land({
    name: "Lot B001",
    location: "Blue Ridge, Georgia",
    type: "urban",
    purchased: true
  })
  const homeOne = new Home({ // here
    name: "Suzy's Place",
    type: "family home",
    color: "papayawhip",
    hasGarage: true,
    hasBigFrontYard: false,
    purchased: true
  })
  const landTwo = new Land({
    name: "Lot B001",
    location: "Blue Ridge, Georgia",
    type: "urban",
    purchased: true
  })
  const homeTwo = new Home({ // here
    name: "Secret Witchcraft Hut",
    type: "log cabin",
    color: "lavender",
    hasGarage: true,
    hasBigFrontYard: false,
    purchased: true
  })
  const homeThree = new Home({ // here
    name: "Cheap Rental Income",
    type: "shotgun house",
    color: "magenta",
    hasGarage: true,
    hasBigFrontYard: false,
    purchased: true
  })
  landOne.homes.push(homeOne)
  landTwo.homes.push(homeTwo)
  landTwo.homes.push(homeThree)
  suzyUser.landLots.push(landOne)
  suzyUser.landLots.push(landTwo)
  console.log("Suzy saved to database.")
  console.log(`She purchased two lots of land and built three homes:
  1. Home in Atlanta
  2. Cabin in Florida
  3. Rental in Flordia
  `)
  return suzyUser.save()

  // 2. josh
}).then((user) => {
  return User.create({
    name: 'Josh Therrien',
    favColor: 'green'
  })
  const landOne = new Land({
    name: "Lot A001",
    location: "Midtown Atlanta",
    type: "urban",
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
  user.landLots.push(landOne)
}).then((user) => {
  console.log(`${user.name} saved to database.`)
  return user.save()

  // 3. Sammy the Cat

}).then((user) => {
  return User.create({
    name: 'Sammy the Cat',
    favColor: 'blue'
  })
  const landOne = new Land({
    name: "Lot B009",
    location: "Blue Ridge, Georgia",
    type: "mountains",
    purchased: true
  })
  const homeOne = new Home({
    name: "Casa de Sammy",
    type: "kitty house",
    color: "blue",
    hasGarage: false,
    hasBigFrontYard: false,
    purchased: true
  })
  const landTwo = new Land({
    name: "Lot A009",
    location: "Midtown Atlanta",
    type: "urban",
    purchased: true
  })
  const homeTwo = new Home({ // here
    name: "Casa de Sammy 2",
    type: "kitty house",
    color: "blue",
    hasGarage: false,
    hasBigFrontYard: false,
    purchased: true
  })
  const landThree = new Land({
    name: "Lot F009",
    location: "Glengarry, Florida",
    type: "swamp",
    purchased: true
  })
  const homeThree = new Home({ // here
    name: "Casa de Sammy 3",
    type: "kitty house",
    color: "blue",
    hasGarage: false,
    hasBigFrontYard: false,
    purchased: true
  })
  landOne.homes.push(homeOne)
  landTwo.homes.push(homeTwo)
  landThree.homes.push(homeThree)
  user.landLots.push(landOne)
  user.landLots.push(landTwo)
  user.landLots.push(landThree)
}).then((user) => {
  console.log(`${user.name} saved to database.`)
  return user.save()

// 4. Kanye the Giant

}).then((user) => {
  return User.create({
    name: 'Kanye the Giant',
    favColor: 'blue'
  })
  const landOne = new Land({
    name: "Lot A002",
    location: "Midtown Atlanta",
    type: "urban",
    purchased: true
  })
  const homeOne = new Home({
    name: "Big House",
    type: "skyscraper",
    color: "maroon",
    hasGarage: false,
    hasBigFrontYard: false,
    purchased: true
  })
  landOne.homes.push(homeOne)
  user.landLots.push(landOne)
}).then((user) => {
  console.log(`${user.name} saved to database.`)
  return user.save()

  // 5. Eric Liu, OG

}).then((user) => {
  return User.create({
    name: 'Eric Liu, Original Gangsta',
    favColor: 'cyan'
  })
  const landOne = new Land({
    name: "Lot A003",
    location: "Midtown Atlanta",
    type: "urban",
    purchased: true
  })
  const homeOne = new Home({
    name: "ericsCrib . $", // "Eric's Crib, Dot Bling"
    type: "modern condo",
    color: "cyan",
    hasGarage: false,
    hasBigFrontYard: true,
    purchased: true
  })
  landOne.homes.push(homeOne)
  user.landLots.push(landOne)
}).then((user) => {
  console.log(`${user.name} saved to database.`)
  return user.save()

  // 6. O'Lee, Architect

}).then((user) => {
  return User.create({
    name: "O'Lee",
    favColor: 'purple'
  })
  const landOne = new Land({
    name: "Lot B004",
    location: "Blue Ridge, Georgia",
    type: "mountains",
    purchased: true
  })
  const homeOne = new Home({
    name: "O'Lee's Gettaway",
    type: "modern condo",
    color: "purple",
    hasGarage: true,
    hasBigFrontYard: false,
    purchased: true
  })
  landOne.homes.push(homeOne)
  user.landLots.push(landOne)
}).then((user) => {
  console.log(`${user.name} saved to database.`)
  return user.save()

// 7. Jack Black

}).then((user) => {
  return User.create({
    name: "Jack Black",
    favColor: 'red'
  })
  const landOne = new Land({
    name: "Lot F001",
    location: "Glengarry, Florida",
    type: "swamp",
    purchased: true
  })
  const homeOne = new Home({
    name: "Jack Black's Shack",
    type: "log cabin",
    color: "red",
    hasGarage: false,
    hasBigFrontYard: false,
    purchased: true
  })
  landOne.homes.push(homeOne)
  user.landLots.push(landOne)
}).then((user) => {
  console.log(`${user.name} saved to database.`)
  return user.save()

}).catch((error) => {
  console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
  console.log(error)
}).then(() => {
  mongoose.connection.close()
  console.log(`
      Finished seeding database...
      
      Disconnected from MongoDB
    `)
})