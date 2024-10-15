"use client";
import { useState } from "react";

export default function NewItem(){
    const [quantity, setQuantity] = useState(1);
    const [name, setName]= useState("");
    const [category, setCategory]= useState("produce");

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

        let itemObject = {
            itemName: name,
            itemQuantity: quantity,
            itemCategory: category
        }

        alert(`
            Added item: ${itemObject.itemName} |
            Quantity: ${itemObject.itemQuantity} |
            Category: ${itemObject.itemCategory}`
        );

        setName("");
        setQuantity(1);
        setCategory("");
    }

    let btnStyles = " bg-blue-600 rounded py-2 px-4 mt-5 hover:bg-blue-400 active:bg-yellow-500 disabled:bg-gray-400"
    return (
        <><div className="bg-slate-300 p-5">
            <p>Quantity: {quantity}</p>
            <button className={btnStyles} onClick={decrementQuantity}> - </button>
            <button className={btnStyles} onClick={incrementQuantity}> + </button>
        </div>
        <form onSubmit={handleSubmit} className="bg-slate-200">
            <div className="mb-3">
                <label className="inline-block w-40">Item Name: </label>
                <input className="px-2 py-0.5 rounded border"
                type="text" 
                onChange={setName} 
                value={name} /> 
            </div>

            <div className="mb-3">
                <label className="inline-block w-40">Category </label>
                <select onChange={setCategory} value={category}>
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
                <button className={btnStyles} onClick={handleSubmit}> + </button>
            </div>
        </form></>


            
    );
}