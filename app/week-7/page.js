"use client";
import { useState } from "react";
import ItemComp from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page(){
    let itemArray = itemsData.map( (item)=> ({...item}));
    const [items, setItems] = useState(itemArray);
    const handleAddItem = (newItemObj) => {
        setItems({...items, newItemObj});
        //console.log(items);
    };

    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}