"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const handleAddItem = (newItemObj) => {
        setItems((prevItems) => [...prevItems, newItemObj]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName.split(",")[0].trim().replace(/\p{Emoji_Presentation}/gu, "");
        setSelectedItemName(cleanedName);
    };

    return (
        <main>
            <div className="w-full lg:w-1/2 p-2">
                <h1>Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items}  onItemSelect={handleItemSelect}/>
            </div>
            
            <div className="w-full lg:w-1/2 p-2">
                {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
            </div>
        </main>
    )
}