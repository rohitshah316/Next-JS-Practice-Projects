"use client"

import {useState,useEffect} from 'react'
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

export default function HomePage(){

  const [notes, setNotes] = useState([]);
 




  async function fetchNotes(){
    const res=await fetch('/api/notes');
    const data=await res.json();

    setNotes(data);
  }

  useEffect(()=>{
    fetchNotes();
  },[])


  



  return(
    <main className='p-20'>
      <h1>Notes App</h1>

     <NoteForm fetchNotes={fetchNotes}/>
      <NotesList fetchNotes={fetchNotes} notes={notes}/>
    </main>
  )
}