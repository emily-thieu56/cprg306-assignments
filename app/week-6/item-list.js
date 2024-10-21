"use client";
import ItemComp from "./item";
import { useState } from "react";

export default function ItemList(){
    const items = [
        {
          id: "1h2GJKH12gkHG31h1H",
          name: "milk, 4 L 🥛",
          quantity: 1,
          category: "dairy"
        },
        {
          id: "2KJH3k2j3H1k2J3K1H",
          name: "bread 🍞",
          quantity: 2,
          category: "bakery"
        },
        {
          id: "3h2KJH3k2j3H1k2J3",
          name: "eggs, dozen 🥚",
          quantity: 2,
          category: "dairy"
        },
        {
          id: "4k2J3K1H2GJKH12gk",
          name: "bananas 🍌",
          quantity: 6,
          category: "produce"
        },
        {
          id: "5H1h1H2KJH3k2j3H",
          name: "broccoli 🥦",
          quantity: 3,
          category: "produce"
        },
        {
          id: "6H1k2J3K1H2GJKH1",
          name: "chicken breasts, 1 kg 🍗",
          quantity: 1,
          category: "meat"
        },
        {
          id: "7gkHG31h1H2KJH3k",
          name: "pasta sauce 🍝",
          quantity: 3,
          category: "canned goods"
        },
        {
          id: "8j3H1k2J3K1H2GJK",
          name: "spaghetti, 454 g 🍝",
          quantity: 2,
          category: "dry goods"
        },
        {
          id: "9H12gkHG31h1H2KJ",
          name: "toilet paper, 12 pack 🧻",
          quantity: 1,
          category: "household"
        },
        {
          id: "10H3k2j3H1k2J3K1",
          name: "paper towels, 6 pack",
          quantity: 1,
          category: "household"
        },
        {
          id: "11k2J3K1H2GJKH12",
          name: "dish soap 🍽️",
          quantity: 1,
          category: "household"
        },
        {
          id: "12GJKH12gkHG31h1",
          name: "hand soap 🧼",
          quantity: 4,
          category: "household"
        },
      ];

    const [sortBy, setSortBy] = useState("name");
    // sort by name
    items.sort((a,b) => {
      if (a.name < b.name) return -1; 
      if (a.name > b.name) return 1; 
      return 0;
    });
    
    //sort by category
    items.sort((a,b) => {
      if (a.category < b.category) return -1; 
      if (a.category > b.category) return 1; 
      return 0;
    });
    
    return (
      <section>
        <div>
            <label for = "sort"> Sort by: </label>
            <button className="bg-orange-500 p-1 m-2 w-28" onClick={setSortBy}>Name</button>
            <button className="bg-orange-500 p-1 m-2 w-28" onClick={setSortBy}>Category</button>
      </div>
      
      <div>
        <ul>
          {shoppingList.map((shoppingList, index ) => (<ItemComp key = {index} {...shoppingList}/>))}
        </ul>
      </div>
      </section>
      
    
    );
      
}