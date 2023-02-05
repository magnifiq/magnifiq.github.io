import {MdDeleteForever} from 'react-icons/md';

const Note=({text, id, date, handleDeleteNote})=>{
    return(
        <div className="note">
            <spin>{text}</spin>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em' onClick={()=>handleDeleteNote(id)}/>
            </div>
        </div>
    )
}

export default Note