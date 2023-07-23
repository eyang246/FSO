require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const Phonebook = require('./models/phonebook')
const cors = require('cors')

app.use(cors())

morgan.token('req-body', (req) => {
    return JSON.stringify(req.body);
  });

app.use(express.static('build'))
app.use(express.json())
app.use(morgan('[:method] :url :status - :response-time ms - :req-body'));




app.get('/', (request,response) => {
    response.send('<h1>Eric and Friends</h1>' + persons.length)
    console.log(persons.length)
    
})

app.get('/api/persons', (request, response) => {
    Phonebook.find({}).then(phonebooks => {
      response.json(phonebooks)
    })
  })

app.get('/api/persons/:Id', (request, response, next) => {
    Phonebook.findById(request.params.Id).then(phonebook => { 
        if(phonebook){
            response.json(phonebook)
        } else {
            response.status(404).end
        }
        })
        .catch(error => next(error))
    })
  
const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
  
    next(error)
  }
 app.use(errorHandler)


app.delete('/api/persons/:Id', (request,response) => {
    Phonebook.findByIdAndRemove(request.params.Id).then(phonebook => { 
        if(phonebook){
            response.json(phonebook)
        } else {
            response.status(404).end
        }
    })
        .catch(error => { 
            console.log(error)
            response.status(400).send({ error: 'malformatted id' })
        })
  })

app.post('/api/persons', (request,response) => { 
    const body = request.body
    
    if(!body.name){
        return response.status(400).json({
            error: 'content missing!'
        })
    } 

    const phonebook = new Phonebook({
        id:body.id,
        name:body.name,
        occupation:body.occupation,
        number:body.number,
    })

    phonebook.save().then(savedPhonebook => {
        response.json(savedPhonebook)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})