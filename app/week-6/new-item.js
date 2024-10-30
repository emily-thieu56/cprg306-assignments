"use client";
import { useState } from "react";

export default function NewItem(){
    const [quantity, setQuantity] = useState(1);
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
    
    let btnStyles = " bg-blue-600 rounded py-2 px-4 mt-5 hover:bg-blue-400 active:bg-yellow-500 disabled:bg-gray-400"
    return (
        <div className="bg-slate-300 p-5">
            <p>Quantity: {quantity}</p>
            <button className={btnStyles} onClick={decrementQuantity}> - </button>
            <button className={btnStyles} onClick={incrementQuantity}> + </button>
        </div>
    );
}