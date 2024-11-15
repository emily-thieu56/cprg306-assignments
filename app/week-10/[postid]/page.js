"use client"
import { useEffect, useState } from "react"
import { useUserAuth } from "../_utils/auth-context";
import { dbGetBlogPost } from "../_services/blog-service";

export default function BlogPostPage({params}){
    const [blogPost, setBlogPost] = useState({});
    const {user} = useUserAuth();
    useEffect(() => {
        if (user) {
            dbGetBlogPost(user.uid, params.postid, setBlogPost);
        }
    }, [user]);
    return(
        <main>
            <header>
                <h1>{blogPost.title}</h1>
            </header>
            <article>{blogPost.contents}</article>
        </main>
    )
}