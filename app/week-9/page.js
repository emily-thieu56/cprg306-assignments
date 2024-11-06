"use client";
import { useUserAuth } from "./_utils/auth-context";

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
                    <Link href="/week-9/protected/"> Protected Page</Link>
                    <div>
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