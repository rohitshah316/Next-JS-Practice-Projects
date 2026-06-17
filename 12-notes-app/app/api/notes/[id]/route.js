import { notes } from "@/app/data/notes";

export async function DELETE(request,{params}) {

    const {id}=await params;
    const nid=Number(id);


    const index=notes.findIndex(
        (note)=>note.id===nid
    );

    if(index===-1){
        return Response.json(
            {error:"Note not found"},
            {status:404}
        )
    }

    notes.splice(index,1)

    return Response.json({success:true})
}


export async function PUT(request,{params}){
    const {id}=await params;

    const nid=Number(id);

    const body=await request.json();

    const note=notes.find((note)=>note.id===nid);

    if(!note){
        return Response.json(
            {error:"Note not found"},
            {status: 404}
        )
    }
    note.title=body.title;

    return Response.json(note);
}