"use client"

import {editTodo} from './action';

export default function EditButton({todo}){
    return(
        <button onClick={async()=>{
            const newTitle=prompt("Edit Todo:",todo.title);

            if(newTitle){
                await editTodo(todo.id,newTitle);
            }
        }}
        className='text-blue-500'
        >
            Edit
        </button>
    )
}