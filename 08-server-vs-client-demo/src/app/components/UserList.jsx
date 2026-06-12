
"use client"
import { useState } from "react";

// async function getUsers(){
//     const res=await fetch('https://jsonplaceholder.typicode.com/users');
//     return res.json();
// }


export default  function UserList(){

    const [count,setCount]=useState(0);
    // const users=await getUsers();

    

    console.log("Running on Server");


    return(
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-3">Users(Server Component)</h2>

            {/* <div className="space-y-2">
                {users.map((user)=>(
                    <p key={user.id}>{user.name}</p>
                ))}
            </div> */}   

            <button 
            className="bg-gray-800 text-white px-4 py-2 rounded"
            onClick={()=>setCount(count+1)}>Count:{count}</button>
        </div>
    )
}