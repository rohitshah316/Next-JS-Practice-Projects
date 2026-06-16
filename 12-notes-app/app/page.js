"use client"

import {useState,useEffect} from 'react'

export default function HomePage(){

  const [notes, setNotes] = useState([]);
  const [title,setTitle]=useState("");




  async function fetchNotes(){
    const res=await fetch('/api/notes');
    const data=await res.json();

    setNotes(data);
  }

  useEffect(()=>{
    fetchNotes();
  },[])


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


async function deleteNote(id) {
  await fetch(`/api/notes/${id}`,{
    method:"DELETE"
  })
  fetchNotes();
}
  return(
    <main className='p-20'>
      <h1>Notes App</h1>

      <input value={title}
      onChange={(e)=>setTitle(e.target.value)}
      placeholder='Enter note'
      />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map(note=>(
          <li key={note.id}>{note.title}
          <button onClick={()=>deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  )
}