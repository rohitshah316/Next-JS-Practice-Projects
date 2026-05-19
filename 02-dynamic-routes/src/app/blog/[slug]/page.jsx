import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";



export function generateStaticParams(){
    return posts.map((post)=>({
        slug:post.slug
    }))
}


const BlogPost=async({params})=>{
    const {slug}=await params;

    const post=posts.find((p)=>p.slug===slug);

    if(!post) return notFound();


    return(
        <div>
            <h1>{post.title}</h1>
            <h2>Author: {post.author}</h2>
            <small>Date:{post.date}</small>
            <p>{post.content}</p>
        </div>
    )
}

export default BlogPost;