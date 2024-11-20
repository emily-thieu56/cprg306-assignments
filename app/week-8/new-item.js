"use client";
import { useState } from "react";

export default function NewItem({onAddItem}){
    const [quantity, setQuantity] = useState(1);
    const [name, setName]= useState("");
    const [category, setCategory]= useState("produce");
    //const[id, setId] = useState("");

    const incrementQuantity = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrementQuantity = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newId = Math.floor(Math.random() * 1000000);
        const newItem = { id: newId, name, quantity, category };
        onAddItem(newItem);
        onAddItem(itemObject);

        //setId("");
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    let btnStyles = " bg-blue-600 rounded py-2 px-4 mt-5 hover:bg-blue-400 active:bg-yellow-500 disabled:bg-gray-400"
    return (
        <div className="flex flex-col items-center p-2 border rounded-md shadow-md w-full bg-gray-800 text-white">
            <h1 className="text-lg font-semibold mb-2">Add New Item</h1>
            <form onSubmit={handleSubmit} className="bg-slate-200">
            <div className="mb-3">
                <label className="inline-block w-40">Item Name: </label>
                <input className="px-2 py-0.5 rounded border"
                type="text"
                id="name" 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter item name" /> 
            </div>

            <div className="bg-slate-300 p-5">
                <label className="inline-block w-40">Quantity: </label>
                <button className={btnStyles} onClick={decrementQuantity}> - </button>
                <button className={btnStyles} onClick={incrementQuantity}> + </button>
            </div>

            <div className="mb-3">
                <label className="inline-block w-40">Category </label>
                <select onChange={(e) => setCategory(e.target.value)} 
                value={category}
                className="border px-3 py-1 rounded-md focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white text-sm w-full">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Food</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="mb-3">
                <button className={btnStyles} type="submit"> Add Item </button>
            </div>
        </form>
        </div>
        
    );
}