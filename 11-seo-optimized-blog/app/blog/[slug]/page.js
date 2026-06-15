
import { getPost,getPosts } from "@/app/lib/posts";
import { notFound } from "next/navigation";

export async function generateMetadata({params}){
    const {slug} = await params;
    const post=getPost(slug);

    if(!post) return {};

    return(
        {
            title:post.title,
            description:post.description,

            openGraph:{
                title:post.title,
                description:post.description,
                type:"article",
                url:`https//localhost:3000/blog${slug}`,
                images:[
                    {
                        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7Q2-iOUXeta4efD3d8FAPLTOfSN1lKRhOGJInoa6mA&s=10',
                        width:1200,
                        height:630,
                        alt:post.title
                    },
                ],
            },
        }
    )
}


export async function generateStaticParams(){
    const posts=getPosts();

    return posts.map(post=>({
        slug:post.slug,
    }))
}
export default async function PostPage({params}){

    const {slug}=await params;
    const post=  getPost(slug);

    if(!post){
        notFound()
    }


    return(
        <article>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>{post.content}</p>
        </article>
    )
}