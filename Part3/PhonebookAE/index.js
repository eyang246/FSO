require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const Phonebook = require('./models/phonebook')
app.use(express.static('build'))

morgan.token('req-body', (req) => {
    return JSON.stringify(req.body);
  });


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

app.get('/api/persons/:id', (request, response) => {
    Phonebook.findById(request.params.id).then(phonebook => { 
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


app.delete('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end();
})

// const generateId = () => {
//     const maxId = persons.length > 0 
//         ? Math.max(...persons.map(n => n.id))
//         : 0 
//     return maxId + 1
// }

app.post('/api/persons', (request,response) => { 
    const body = request.body
    
    if(!body.name){
        return response.status(400).json({
            error: 'content missing!'
        })
    } 

    const phonebook = new Phonebook({
        name: body.name,
        number:body.number,
        id:body.id,
    })

    phonebook.save().then(savedPhonebook => {
        response.json(savedPhonebook)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})