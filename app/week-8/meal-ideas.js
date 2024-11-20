"use client";
import { useEffect, useState } from "react";

async function fetchMealIdeas() {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || [];
    } catch(error) {
        console.log( `Error: ${error.message}`);
    }
}

export default function MealIdea (){
    const [meals, setMeals] = useState(null);

    useEffect(() => {
        async function loadMealIdeas() {
            if (ingredient) {
              const fetchedMeals = await fetchMealIdeas(ingredient);
              setMeals(fetchedMeals);
            }
          }
          loadMealIdeas();
        }, [ingredient]);
        
        
    
        return (
        <section className="p-4 bg-gray-800 rounded-md">
            {meals.length > 0 ? (
            <ul className="space-y-3">
            {meals.map((meal) => (
                <li key={meal.idMeal} className="p-3 bg-gray-700 border rounded-md">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-32 object-cover rounded-md mb-2" />
                <p className="font-semibold text-white text-center">{meal.strMeal}</p>
                </li>
            ))}
            </ul>
            ) : (
            <p className="text-gray-400 text-center">No meal ideas found.</p>
            )}
        </section>
    );
}