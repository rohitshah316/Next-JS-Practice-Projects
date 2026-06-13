'use client'
import UserList from "./components/UserList";
import {useState} from 'react'
export default function HomePage(){
  const [count,setCount]=useState(0);

  console.log("HomePage Running")

  return(
    <main>
      <h1>Server vs Client Components</h1>
      <p>Count:{count}</p>
      <button className="bg-gray-500 p-2 rounded-2xl m-10"
      onClick={()=>setCount(c=>c+1)}
      >Count:{count}</button>
      <UserList/>
    </main>
  )
}