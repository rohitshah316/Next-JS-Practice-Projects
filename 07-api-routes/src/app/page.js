"use client"

export default function Home(){
  const createUser=async()=>{
    const response=await fetch('/api/users',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        name:"Alex",
      }),
    })

    const data=await response.json();
    console.log(data);
  }

  return(
    <main>
    <h1>API Project</h1>
    <button onClick={createUser}>
      Create User
    </button>
    </main>
  )
}