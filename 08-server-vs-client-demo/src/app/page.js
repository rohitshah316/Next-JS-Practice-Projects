import UserList from "@/app/components/UserList";


export default function HomePage(){
  return(
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Server vs client components</h1>
      <UserList/>
    </main>
  )
}