// import { resolve } from "styled-jsx/css";

async function getData(){
//    await new Promise((resolve)=> setTimeout(resolve,3000));
throw new Error("Something Failed!");

//    return "Data Loaded";
}


export default async function TestPage(){
    const data=await getData();

    return(
        <main>
            <h1>{data}</h1>
        </main>
    )
}