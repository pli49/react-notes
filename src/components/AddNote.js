import React,{useState} from 'react';
/*this component is for adding new note in the notes application*/
function AddNote({handleAddNote}) {

    const [noteText,setNoteText] = useState('');

    const charLimit = 500;
    
    const handleChange =(event)=>{
   
    if(charLimit - event.target.value.length>=0){
        setNoteText(event.target.value);
    }
   
    }
    /*note saving*/
    
    const handleSaveClick =() =>{
    /*Dont save if no input*/
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
       
    }
    return (
        <div className="note new">
        {/*Text input*/}
            <textarea  cols="10" rows="8" placeholder="Type to add a new note..."
            onChange={handleChange} value={noteText}
            ></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
};

export default AddNote;
