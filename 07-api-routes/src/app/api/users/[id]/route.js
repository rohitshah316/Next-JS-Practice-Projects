 const users=[
        {id:1,name:"Rohit"},
        {id:2,name:"Aniruddha"},
        {id:3,name:"Prinsa"}
    ];

export async function GET(request,{params}){
    const {id}= await params;

    const user=users.find(u=>u.id===parseInt(id));

    if(!user){
        return Response.json(
            {message:"User not Found"},
            {status:404}
        )
    }

    return Response.json(user);
}
