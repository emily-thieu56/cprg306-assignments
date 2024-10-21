import ItemComp from "./item";
import ItemList from "./item-list";

export default function Page({shoppingList}){
    return (
        <main>
            <h1>Shopping List</h1>
            <ItemList item = {shoppingList}/>
        </main>
    )
}