"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
// Use the useUserAuth hook to get the user object and the login and logout functions
export default function SignInPage (){
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// Sign in to Firebase with GitHub authentication
async function handleSignIn(){
  try {
    await gitHubSignIn();
  } catch (error) {
    console.log(error);
  }
}

// Sign out of Firebase
async function handleSignOut() {
  try {
      await firebaseSignOut();
  } catch (error) {
      console.log(error);
  }
}
console.dir(user);
// Display some of the user's information
return(
  <main>
    { user ? (
    <div>
      <p>
        Welcome, {user.displayName} ({user.email})
      </p>
      <Link href="/week-9/shopping-list"> Shopping list Page</Link>
      <div>
        <button type="button" 
        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
        onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
   ):(
    <div>
      <button type="button" 
      className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
      onClick={handleSignIn}>
          Sign In with GitHub</button>
    </div>
    )};
    
  </main>
 
);
}

