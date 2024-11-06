"use client";
import ItemComp from "./item";
import { useState } from "react";

export default function ItemList({items, onItemSelect}){

    const [sortBy, setSortBy] = useState("name");

    const handleNameSort = () => {
      setSortBy("name");
    };

    const handleCategorySort = () => {
      setSortBy("category");
    };
    
    const sortItems = () => {
      if (sortBy === "name") {
        return [...items].sort((a,b) => a.name.localeCompare(b.name));
      }
      else if (sortBy === "category") {
        return [...items].sort((a,b) => a.category.localeCompare(b.category));
      }
      return items;
    }
    
    return (
      <section>
        <div>
            <label for = "sort"> Sort by: </label>
            <button className="bg-orange-500 p-1 m-2 w-28 active:bg-yellow-500" onClick={handleNameSort}>Name</button>
            <button className="bg-orange-500 p-1 m-2 w-28 active:bg-yellow-500" onClick={handleCategorySort}>Category</button>
      </div>
      
      <div>
        <ul>
          {sortItems().map((items) => (<Item key={items.id} {...items} />))};
        </ul>
      </div>
      </section>
      
    
    );
      
}