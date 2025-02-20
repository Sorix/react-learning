import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    console.log("Button clicked", event);

    setNotes(notes.concat({
      content: newNote,
      important: true,
      id: notes.length + 1
    }))
  }

  const handleNoteChange = (event) => setNewNote(event.target.value)

  const handleShowAllClick = () => setShowAll(!showAll)

  const isImportant = (note) => {
    if (showAll) { return true }
    return note.important 
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAllClick}>{showAll ? "Show Important Only" : "Show All"}</button>
      <ul>
        {
          notes
            .filter(isImportant)
            .map((note) => (
              <Note key={note.id} note={note} />
            ))
        }
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
