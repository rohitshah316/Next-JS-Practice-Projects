
const users=[
        {id:1,name:"Rohit"},
        {id:2,name:"Aniruddha"},
        {id:3,name:"Prinsa"}
    ]
export async function GET(){
    

    return Response.json(users);
}

export async function POST(request){
    const body=await request.json();

    if(!body.name){
        return Response.json(
            {
        message:"Name is required"
    },
{
    status:400
}
        )
    }

    const newUser={
        id:users.length+1,
        name:body.name,
    };

    users.push(newUser);

    console.log(body)

    return Response.json({
        message:"User Created Successfully",
        user:newUser,
    },{status:201});
}