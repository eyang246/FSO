const express = require('express')
const app = express()
const morgan = require('morgan')

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

morgan.token('req-body', (req) => {
    return JSON.stringify(req.body);
  });


app.use(express.json())
app.use(morgan('[:method] :url :status - :response-time ms - :req-body'));



app.get('/', (request,response) => {
    response.send('<h1>Eric and Friends</h1>' + persons.length)
    console.log(persons.length)
    
})

app.get('/api/persons', (request,response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    response.json(person)
})

app.delete('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end();
})

const generateId = () => {
    const maxId = persons.length > 0 
        ? Math.max(...persons.map(n => n.id))
        : 0 
    return maxId + 1
}

app.post('/api/persons', (request,response) => { 
    const body = request.body
    
    if(!body.name){
        return response.status(400).json({
            error: 'content missing!'
        })
    } 

    const nameChecker = persons.some(person => person.name === body.name)

    if (nameChecker) {
        return response.status(400).json({
            error: 'name exists!'
        })

    }

    const person = {
        name: body.name,
        number:body.number,
        id:generateId(),
    }
    persons = persons.concat(person)

    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})