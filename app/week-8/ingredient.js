export default function Ingredient({ingredientObj}){
    const{
        idMeal,
        strMeal,
        strMealThumb
    } = ingredientObj;

    return(
        <div className="m-10 p-5 bg-blue-400 rounded-lg">
            <img src={strMealThumb} className="max-h-52 border-2 border-cyan-900"/>
            <ul>
                <li>ID: {idMeal}</li>
                <li> {strMeal}</li>
            </ul>
        </div>
    );
}