import Link from "next/link";
import { getPosts } from "../lib/posts";

export default function BlogPage(){

    const posts=getPosts();
    return(
        <div>
            <h1>All Posts</h1>
            {posts.map((post)=>(
                <div key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </div>
            ))}
        </div>
    )
}