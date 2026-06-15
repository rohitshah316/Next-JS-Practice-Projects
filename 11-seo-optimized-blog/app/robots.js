import { userAgent } from "next/server";
import sitemap from "./sitemap";

export default function robot(){
    return({
        rules:[
            {
                userAgent:"*",
                allow:"/",
            },
        ],
        sitemap: 'http://locahost:3000/sitemap.xml'
    })
}