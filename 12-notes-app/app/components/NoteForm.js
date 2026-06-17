
import {useState} from 'react'

export default function NoteForm({fetchNotes}){
 const [title,setTitle]=useState("");


 async function addNote() {
  if(!title) return;

  await fetch('/api/notes',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({title})
  });
  
  setTitle("");
  fetchNotes();
}

    return(
        <>
         <input value={title}
      onChange={(e)=>setTitle(e.target.value)}
      placeholder='Enter note'
      />
      <button onClick={addNote}>Add Note</button>
        </>
    )
}