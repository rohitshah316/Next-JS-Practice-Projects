import { notes } from "@/app/data/notes";


export async function GET(){
    return Response.json(notes)
}

export async function POST(request){
    const body=await request.json();

    const newNote={
        id:Date.now(),
        title:body.title,
    };

    notes.push(newNote);

    return Response.json(newNote);
}