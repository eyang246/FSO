const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.set('strictQuery',false)
mongoose.connect(url)
console.log('connecting to', url)

mongoose.connect(url)
.then((result) => {
    console.log('connected to MongoDB')
})
.catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})

const personSchema = new mongoose.Schema({
    id: Number,
    number: Number,
    name: String,
})

module.exports = mongoose.model('Phonebook', personSchema)