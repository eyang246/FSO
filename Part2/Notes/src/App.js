import { useState, useEffect } from 'react'
import axios from 'axios' 
import Note from './Note'
import noteService from './services/notes'

const App = () => {
  const[notes, setNotes] = useState([])
  const[newNote, setNewNote] = useState('enter input')
  const[showAll, setShowAll] = useState(false)
  
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  
  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote).then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
  
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }
 
  const addNote = (event) => {
    event.preventDefault()
    const newNoteObj = {
      content: newNote, 
      important: Math.random() < 0.5,
    } 
 
    noteService
      .create(newNoteObj)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const userFilter = () => {
    setShowAll(!showAll)
  }

  const notesToShow = showAll 
    ? notes 
    : notes.filter(note => note.important === true)

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  } 

  return (
    <div>
      <h1>Notes</h1>
        <div>
          <button onClick = {userFilter}>Filter</button>
        </div>
        <ul>
          {notesToShow.map(note => 
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
          )}
        </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App