import Note from "./Note";
import AddNote from "./AddNote";
const NotesList=({notes, handleAddNote, handleDeleteNote})=>{ 

    return(
        <div className="notes-list">
            {notes.map((note,key)=>(
                <Note 
                    text={note.text} 
                    date={note.date} 
                    id={note.id} 
                    key={note.id}
                    handleDeleteNote={handleDeleteNote}
                />
                ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList