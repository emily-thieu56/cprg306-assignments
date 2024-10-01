import ItemComp from "./item";
import ItemList from "./item-list";

export default function Page(){
    return (
        <main>
            <h1>Shopping List</h1>
            <ItemList />
            <ItemComp />
        </main>
    )
}