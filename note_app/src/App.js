import './App.css';
import NotesList from './components/NotesList';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Header from './components/Header';

const App=()=>{
  const [notes,setNotes]=useState([
    {
    id: crypto.randomUUID(),
    text: "Let's begin 1",
    date: "23/10/2019"
  },
  {
    id: crypto.randomUUID(),
    text: "Let's begin 2",
    date: "03/09/2019"
  },
  {
    id: crypto.randomUUID(),
    text: "Let's begin 3",
    date: "23/09/2009"
  },
  {
    id: crypto.randomUUID(),
    text: "Let's begin 4",
    date: "23/09/1019"
  }]);

  //console.log(notes);

  const [searchText, setSearchText]=useState('');
  const [darkMode, setDarkMode]=useState(false);

  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes]);

  const addNote=(text)=>{
    const date= new Date();
    const newNote={
      text: text,
      date: date.toLocaleDateString(),
      id: crypto.randomUUID()
    }

    const newNotes=[...notes, newNote];
    setNotes(newNotes);
  }


  const deleteNote=(id)=>{
    const newNotes=notes.filter((note)=>note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
    
  );
}

export default App;
