import { getPosts } from "./lib/posts";

const baseURL='http://locahost:3000'

export default function sitemap(){
    const posts=getPosts();

    return([
        {
            url:baseURL,
            lastModified:new Date(),
        },
        {
            url:  `${baseURL}/blog`,
            lastModified:new Date(),
        },
        ...posts.map((post)=>({
            url:`${baseURL}/blog/${post.slug}`,
            lastModified:new Date(),
        }))
    ])
}