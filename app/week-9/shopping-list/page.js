"use client";
import ItemComp from "./item";
import ItemList from "./item-list";
import { useUserAuth } from "./_utils/auth-context";

export default function Page({shoppingList}){
    const {user} = useUserAuth();
    return (
        <main>
            { user ? (
                <div>
                    <h1>Shopping List</h1>
                    <ItemList item = {shoppingList}/>
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