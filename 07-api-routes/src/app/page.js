"use client"

export default function Home(){

  const createUser=async()=>{
    const response=await fetch('/api/users',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        name:"Alex"
      })
    });

    const data=await response.json();
    console.log(data);
  }


  const getUser=async()=>{
    const response=await fetch('/api/users/2');

    const data=await response.json();
    console.log(data);
  }
  return(
    <main>
      <h1>API Routes</h1>

      <button className="bg-gray-300 p-2 hover:bg-gray-400 cursor-pointer" onClick={createUser}>Create User</button>
      <br/><br/>
      <button className="bg-gray-300 p-2 hover:bg-gray-400 cursor-pointer" onClick={getUser}>Get User</button>


      
    </main>
  )
}