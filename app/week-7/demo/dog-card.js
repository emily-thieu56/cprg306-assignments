export default function DogCard({dogObj, removeDogFunc}){
    const {id, name, breed, photoUrl} = dogObj;
    return(
        <div className="bg-blue-300 p-2 max-w-96 rounded-lg">
            <div className="inline-block align-middle">
                <img className= "max-h-28 rounded"src={photoUrl}/>
            </div>

            <div className="inline-block align-middle ml-3">
                <h3 className="text-xl">{name}</h3>
                <p className="text-lg">Id: {id}</p>
                <p className="text-lg">Breed: {breed}</p>
                <button type="button" 
                data-dog-id={id}
                className="text-sm bg-red-700 text-white rounded p-x1"
                onClick={removeDogFunc}
                >Remove</button>
            </div>
        </div>
    )
}