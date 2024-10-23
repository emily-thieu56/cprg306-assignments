"use client";
import { useState } from "react";
import ItemComp from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";

export default function Page(shoppinglist = itemsData){
    const [items, setItems] = useState(shoppinglist);
    const handleAddItem = (newItem) => {
        setItems({...items, newItem});
        console.log(items);
    };

    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}