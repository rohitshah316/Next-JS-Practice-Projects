"use client";

export default function Error({error,reset}){
    return(
        <main>
            <h1>Error:{error.message}</h1>
            <button onClick={()=>reset()}>Try Again</button>
        </main>
    )
}