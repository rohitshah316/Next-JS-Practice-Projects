"use client";

export default function Error({error,reset}){
    return(
        <main>
            <h1>Something went wrong</h1>
            <button onClick={()=>reset()}>Try Again</button>
        </main>
    )
}