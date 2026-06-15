export const posts = [
  {
    slug: "nextjs-seo-guide",
    title: "Next.js SEO Guide",
    description: "Learn SEO in Next.js App Router",
    content: "This article covers metadata, sitemap and robots."
  },

  {
    slug: "server-components",
    title: "Understanding Server Components",
    description: "Learn how server components work",
    content: "Server Components run on the server."
  }
];


export function getPosts(){
    return posts;
}

export function getPost(slug){
    return posts.find(post=>post.slug===slug);
}