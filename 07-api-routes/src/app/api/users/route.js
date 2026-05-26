export async function GET(){
    const users=[
        {id:1,name:"Rohit"},
        {id:2,name:"Aniruddha"},
        {id:3,name:"Prinsa"}
    ]

    return Response.json(users);
}

export async function POST(request){
    const body=await request.json();

    console.log(body)

    return Response.json({
        message:"User Created Successfully",
        newUser:body,
    });
}