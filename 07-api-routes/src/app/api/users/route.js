export async function GET(){
    const users=[
        {id:1,name:"Rohit"},
        {id:2,name:"Aniruddha"},
    ]

    return Response.json(users);
}

export async function POST(request){
    const body=await request.json();

    return Response.json({
        message:"User Created Successfully",
        user:body,
    });
}