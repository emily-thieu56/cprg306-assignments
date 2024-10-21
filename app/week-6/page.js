"use client";

export default function Page() {
    const dogs = [
        {   id: 1,
            name: 'Corgnelious',  
            breed: "Corgi", 
            imageUrl:"https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg"
        },

        {   id: 2,
            name: 'Sleepy', 
            breed: "Brittany", 
            imageUrl:"https://images.pexels.com/photos/4327898/pexels-photo-4327898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },

        {   id: 3,
            name: 'Smiley', 
            breed: "Golden Retriever", 
            imageUrl:"https://images.pexels.com/photos/2409490/pexels-photo-2409490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
    ];
    //sort dogs by name
    dogs.sort((a,b) => a.name.localeCompare(b.name));
    dogs.sort((a,b) => {
        if (a.name < b.name) return -1; 
        if (a.name > b.name) return 1; 
        return 0;
    });

    //do not show dog with id == 2
    const filteredDogs = dogs.filter((dog) => dog.id !== 2);
    console.log(filteredDogs);

    const handleClick = (id) => {
        alert(id);
    };

    return (
        <div className="sm:bg-slate-500 md:bg-slate-200 bg-slate-600">
            <h1>Week 6 Dog Demo</h1>
            <ul>
                {dogs.map((dog) =>(
                    <li key ={dog.id} onClick={() => handleClick(dog.id)}>
                        <h2>{dog.name}</h2>
                        <p>{dog.breed}</p>
                        <img src = {dog.imageUrl} alt={dog.name}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}