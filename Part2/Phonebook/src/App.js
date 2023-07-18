import { useState,useEffect } from 'react'
import axios from 'axios' 
import Phonebook from './Phonebook'

const App = () => {
  const[phonebook, setPhonebook] = useState([])
  const [newName, setNewName] = useState('')
  const [newOccupation, setNewOccupation] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/phonebook')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', phonebook.length, 'notes')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newNameObj = {
      name: newName, 
      job: newOccupation,
      number: newNumber, 
    } 
    setPhonebook(phonebook.concat(newNameObj))
    setNewName('')
    setNewOccupation('')
    setNewNumber('')
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  } 
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
        <Phonebook key={entry.name} phonebook={entry} />
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