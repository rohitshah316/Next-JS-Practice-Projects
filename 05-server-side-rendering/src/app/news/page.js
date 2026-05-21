async function getNews(){
    const res=await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            cache:'no-store'
        }
    );
    const data=await res.json();
    return data;
}

export default async function NewsPage(){
    const posts=await getNews();

    return(
        <main>
            <h1>Latest News</h1>
            {posts.slice(0,10).map((post)=>(
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}

        </main>
    )
}