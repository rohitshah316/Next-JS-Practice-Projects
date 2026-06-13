'use client';

import {useState} from 'react';
export default function UserList({users}){
    const [search, setSearch] = useState("");

    const filteredUsers=users.filter((user)=>
    user.name.toLowerCase().includes(search.toLowerCase())
    );


    return(
        <div>
            <h2>User List(Client Components</h2>

            <input placeholder='Search User...'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
    <p>Results:{filteredUsers.length}</p>

      
            <ul>
               {filteredUsers.map((user)=>(
                <li key={user.id}>{user.name}</li>
               ))}
            </ul>
        </div>
    )
}