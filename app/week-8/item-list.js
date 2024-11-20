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
    
    const sortItems = [...items].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
    
    return (
      <section>
        <div>
            <label for = "sort"> Sort by: </label>
            <button className="bg-orange-500 p-1 m-2 w-28 active:bg-yellow-500" onClick={handleNameSort}>Name</button>
            <button className="bg-orange-500 p-1 m-2 w-28 active:bg-yellow-500" onClick={handleCategorySort}>Category</button>
      </div>
      
      <div>
        <ul>
          {sortItems().map((item) => (<Item key={items.id} 
           name={item.name}
           quantity={item.quantity}
           category={item.category}
           onSelect={onItemSelect} />))};
        </ul>
      </div>
      </section>
      
    
    );
      
}