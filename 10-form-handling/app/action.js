"use server";

import { redirect } from "next/navigation";
import { feedbacks } from "./data";
import { revalidatePath } from "next/cache";


export async function submitFeedback(formData){
    console.log("Server Action Ran!");

    const name=formData.get('name');
    const message=formData.get("message");

    feedbacks.push({
        name,message,
    })

    console.log("Name:",name);
    console.log("Message:",message);

    console.log(feedbacks)
    // return{
    //     sucess:true,
    // }


    // redirect('/success');
    revalidatePath('/')
}