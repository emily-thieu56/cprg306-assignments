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

    return (
        <div>
            <p>Quantity: {quantity}</p>
            <button onClick={incrementQuantity}> + </button>
            <button onClick={decrementQuantity}> - </button>
        </div>
    );
}