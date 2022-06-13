import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
/*using id,text,date,handleDeleteNote as props defined in App.js*/

function Note({id,text,date,handleDelete}) {
    return (
        <div className="note">
        {/*This part will contain the text part*/}
            <span>{text}</span>
            {/*in the footer part of the note*/}
            
            <div className="note-footer">
            {/*it will store date on which the user is going to create the note*/} 
                <small>{date}</small>
                {/*deleting the note using unique id as parameter so we have passed handleDeleteNote function as onClick event*/}
                <MdDeleteForever onClick={()=>handleDelete(id)} className="delete-icon" size="1.3em" />
            </div>
            
        </div>
    )
};

export default Note;
