export const MenuItems = ({name, price, onOrder,num}) => {
    return (
        <div>
            <span>{name} - ${price} </span>
            <button onClick={() => onOrder(name,price,num)}>Order</button>
        </div>
    )
}