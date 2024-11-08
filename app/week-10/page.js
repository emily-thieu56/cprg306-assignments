"use client";
import { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import { dbGetAllBlogPostsByUser } from "./_services/blog-service";
import Link from "next/link";

export default function SignInPage(){
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();
    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    const [blogPostList, setBlogPostList] = useState([]);
    useEffect(() => {
        if (user) {
            dbGetAllBlogPostsByUser(user.uid, setBlogPostList);
        }
        
    }, [user])

    console.dir(user);
    return(
        <main>
            <header>
                <h1 className="text-center text-3xl">Firebase Authority</h1>
            </header>
            { user ? (
                <div>
                    <p>Welcome {user.displayName}!</p>
                    <p>{user.email}</p>
                    <div>
                        <img src={user.photoURL} className="w-10 h-10"/>
                    </div>
                    <Link href="/week-10/add-blog-post/"> Add a new blog post!</Link>
                    <div>
                        <section>
                            <h2>My blog posts</h2>
                            <ul>
                                {
                                    blogPostList.map((post) => {
                                        let postUrl = `/week-10/${post.id}`;
                                        return(<li key={post.id}><Link href={postUrl}>{post.title}</Link></li>)
                                    })
                                }
                            </ul>
                        </section>
                        <button type="button" 
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                        onClick={handleSignOut}>
                            Sign Out</button>
                    </div>
                    
                </div>
            ):(
                <div>
                    <button type="button" 
                    className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                    onClick={handleSignIn}>
                        Sign In with GitHub</button>
                </div>
            )}
           
        </main>
    );
}