import { useState, useEffect } from 'react'
import axios from 'axios'
import Phonebook from './Phonebook'
import personsService from './services/phonebooks'

const App = () => {
  const[phonebook, setPhonebook] = useState([])
  const [newName, setNewName] = useState('')
  const [newOccupation, setNewOccupation] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPhonebook(initialPersons)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const newNameObj = {
      name: newName, 
      job: newOccupation,
      id: newNumber, 
    } 
    
    personsService
    .create(newNameObj)
    .then(returnedPersons => {
      setPhonebook(phonebook.concat(returnedPersons))
      setNewName('')
      setNewOccupation('')
      setNewNumber('')
    })
}

    
  const toggleRemovalOf = id => {
    const person = phonebook.find(n => n.id === id)

    personsService
      .remove(id).then(returnedPersons => {
        setPhonebook(phonebook.map(person => person.id !== id ? person : returnedPersons))
      })

      .catch(error => {
        alert(
          `the note '${phonebook.id}' was already deleted from server`
        )
        setPhonebook(phonebook.filter(p => p.id !== id))
      })
  }

  // const handleNameChange = (event) => {
  //   setNewName(event.target.value)
  // } 
  const handleOccupationChange = (event) => {
    setNewOccupation(event.target.value)
  } 
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  } 
  
  const checkNameExists = (event, name, phonebook) => {
    if(phonebook.some((entry) => entry.name === name)){
      return alert("Invalid")
    }
    else{
      setNewName(event.target.value)
    }
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Numbers</h2>
      <ul>
        {phonebook.map((entry) => (
        <Phonebook key={entry.id} phonebook={entry} toggleRemoval={() => toggleRemovalOf(entry.id)} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <h1>Name</h1>
        <input value={newName} onChange={(event) => checkNameExists(event, event.target.value, phonebook)} />
        <h1>Job</h1>
        <input value={newOccupation} onChange={handleOccupationChange} />
        <h1>Number</h1>
        <input value={newNumber} onChange={handleNumberChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App