import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
/* Formating the stored text data*/

const NotesList=({notes,handleAddNote,handleDelete}) =>{
    return (
        <div className="notes-list">
        {/*use .map to make each note card from notes and also passing the functions and other states as propas*/}
           {notes.map((note)=>
               <Note id={note.id} text={note.text} date={note.date}
               handleDelete={handleDelete}
               />
           )}
           <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
};

export default NotesList;