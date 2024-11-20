export default function ItemComp({id, name, quantity, category, onSelect}) {
    return (
        <ul onClick={() => onSelect(name)}
        className="p-2 bg-gray-800 border rounded mb-2 text-white cursor-pointer hover:bg-gray-700">
            <li>{id}</li>
            <li>{name}</li>
            <li>{quantity}</li>
            <li>{category}</li>
        </ul>
    );
}