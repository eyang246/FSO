import { useState, useEffect } from 'react'
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

  const toggleRemovalOf = (name) => {
    personsService.remove(name).then(() => {
        console.log(name)
        setPhonebook((prevPhonebook) => prevPhonebook.filter((person) => person.name !== name )
      )
    })
      // .catch(error => {
      //   alert(
      //     `the note '${phonebook.name}' was already deleted from server`
      //   )
      //   setPhonebook(phonebook.filter(p => p.id !== id))
      // })
  }

  // const handleNameChange = (event) => {
  //   setNewName(event.target.value)
  // } 

  const handleSubmit = (event) => {
    event.preventDefault()
    const newNameObj = {
      name: newName, 
      occupation: newOccupation,
      number: newNumber, 
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
      <h2>Eric's Manual Phonebook Service</h2>
      <ul>
        {phonebook.map((entry) => (
        <Phonebook key={entry.id} phonebook={entry} toggleRemoval={() => toggleRemovalOf(entry.Id)} />
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