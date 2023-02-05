import { useState } from "react"

const AddNote=({handleAddNote})=>{
    const [noteText, setNoteText]=useState('');
    const characterLimit=200;

    const handleSaveClick=()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    const handleChange=(e)=>{
        if(characterLimit-e.target.value.length>=0){
            setNoteText(e.target.value);
        }
    }
    return(
        <div className="note new">
            <textarea rows="8" cols="10" placeholder="Write down your plans here..." value={noteText} onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>Remaining {characterLimit-noteText.length}</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote