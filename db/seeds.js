const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URI, {
//  useMongoClient: true
//})  // turn on if running seeds on Heroku

 mongoose.connect('mongodb://localhost/dreams_db') // turn on if running local 

const User = require('./models/User')

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
.catch(err=>{
    console.log('Sorry - error saving User seeds.')
    console.log(err)
})
