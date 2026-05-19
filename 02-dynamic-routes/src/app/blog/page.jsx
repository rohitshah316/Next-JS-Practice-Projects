import { posts } from "@/lib/posts";
import Link from "next/link";

 const BlogPost=()=>{
    return(
        <div>
            <h1>BlogPosts</h1>
            <div >
                {posts.map((post)=>(
                    <div key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    )


}

export default BlogPost;