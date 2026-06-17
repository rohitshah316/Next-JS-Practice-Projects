
export default function NotesList({notes,fetchNotes}){
async function deleteNote(id) {
  await fetch(`/api/notes/${id}`,{
    method:"DELETE"
  })
  fetchNotes();
}


async function editNote(id,currentTitle){
  const newTitle=prompt("enter new title",currentTitle);

  if(!newTitle) return;

  await fetch(`/api/notes/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({title:newTitle}),
  })
  fetchNotes()
}

    return(
        <>
        <ul>


        {notes.map(note=>(
          <li key={note.id}>{note.title}
          <button onClick={()=>deleteNote(note.id)}>Delete</button>
          <button onClick={()=>editNote(note.id,note.title)}>Edit</button>
          </li>
        ))}
      </ul>
        </>
    )
}