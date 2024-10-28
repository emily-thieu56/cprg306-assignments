"use client";
import { useState } from "react";
import ItemComp from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page(items = itemsData){
    const [items, setItems] = useState(items);
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