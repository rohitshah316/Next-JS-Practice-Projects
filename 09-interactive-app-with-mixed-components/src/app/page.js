import UserList from './components/UserList'


async function getUsers(){
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default async function HomePage(){

  const users=await getUsers();

  console.log(users)
  return(
    <main className="p-10">
      <h1 className="text-3xl font-bold">Server and Client Components</h1>

      <p>Total Users:{users.length}</p>
      
      <UserList users={users}/>
    </main>
  )
}