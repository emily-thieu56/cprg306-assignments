export default function ItemComp({id, name, quantity, category, onSelect}) {
    return (
        <ul>
            <li>{id}</li>
            <li>{name}</li>
            <li>{quantity}</li>
            <li>{category}</li>
        </ul>
    );
}