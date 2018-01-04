const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/dreams_db')

const User = require('../models/user')

User.remove()
.then(
    console.log('users were removed')
).catch(err=>{
    console.log(err)
})


const ayana = new User({
    name: 'Ayana'
})

const olee = new User({
    name: 'Olee'
})
const kristin = new User({
    name: 'kristin'
})

ayana.save()
.then(user=>{
    console.log (`${user.name} is in the database`)
    return olee.save()
})
.then(user=>{
    console.log (`${user.name} is in the database`)
    return kristin.save()
})
.then(user=>{
    console.log (`${user.name} is in the database`)
})
.catch(err=>{
    console.log('sorry, there was an error')
    console.log(err)
})
