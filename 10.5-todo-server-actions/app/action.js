"use server"

import { revalidatePath } from 'next/cache';
import {todos} from './data'

export async function addTodo(formData){
    const title=formData.get("title");

    todos.push({
        id:Date.now(),
        title,
        completed:false,
    });

    console.log(todos)

    revalidatePath('/')
}


export async function deleteTodo(id){
    const index=todos.findIndex((todo)=>todo.id===id);

    if(index!==-1){
        todos.splice(index,1);
    }

    revalidatePath('/')
}

export async function toggleTodo(id){
    const todo=todos.find((t)=>t.id===id);

    if(todo){
        todo.completed=!todo.completed;
    }

    revalidatePath('/')
}



export async function editTodo(id,newTitle){
    const todo=todos.find((t)=>t.id===id);

    if(todo){
        todo.title=newTitle;
    }

    revalidatePath('/')
}