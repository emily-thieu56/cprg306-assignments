"use client";
import { useUserAuth } from "../_utils/auth-context"

export default function ProtectedPage() {
    const {user} = useUserAuth();
    return(
        <main>
            <header>
                <h1> Protected Page</h1>
            </header>
            { user ? (
                <div>
                    <p> Hello, {user.displayName}, your ID is: {user.uid}</p>
                </div>
            ): (
                <div>
                    <p>You must be logged in to view this page.</p>
                    <Link href="/week-9/">Click here to return to Sign In page</Link>
                </div>
            )}
        </main>
    )
}