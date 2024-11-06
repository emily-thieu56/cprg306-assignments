"use client";
import { useEffect, useState } from "react";
import Ingredient from "./ingredient";

export default function MealIdea (){
    const [meals, setMeals] = useState(null);

    async function fetchMealIdeas() {
        try {
            const response = await fetch(
                "https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}"
            );
            //console.dir(response);
            if ( !response.ok ) console.log(response.statusText);
            const data = await response.json();
            //console.dir(data);
            setMeals(data);
        } catch(error) {
            console.log( `Error: ${error.message}`);
        }
    }

    useEffect(() => {
     fetchMealIdeas();
    }, []);

    return (
        <section>
            {meals && <Ingredient ingredientObj={meals}/>}
        </section>
    );
}