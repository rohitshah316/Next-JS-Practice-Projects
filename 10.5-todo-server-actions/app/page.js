import { addTodo, deleteTodo, editTodo, toggleTodo } from "./action";
import { todos } from "./data";
import EditButton from "./EditButton";

export default function Home(){
  return(
    <main className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Todo App(Server Actions)
      </h1>

      <form action={addTodo}>
        <input
         type="text"
         name="title"
         placeholder="Enter todo..."
         className="border px-2 flex-1 rounded"
         required
        />

        <button type="submit" className="bg-blue-500 text-white px-4 rounded">Add</button>
      </form>

      <div className="space-y-2">
        {todos.map((todo)=>(
          <div key={todo.id} className="border p-3 rounded flex justify-between">
           
            <form
            action={async ()=>{
              "use server";
              await toggleTodo(todo.id);
            }}
            >

              <button className={todo.completed?'line-through text-gray-500':''}>
                {todo.title}
              </button>
            </form>
          <EditButton todo={todo}/>
            <form action={async ()=>{
              "use server"
              await deleteTodo(todo.id)
            }}>
              <button className="text-red-500">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </main>
  )
}