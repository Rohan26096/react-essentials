import { MenuItems } from "./MenuItems"

export const Menu = () => {
    // const handleOrder = (itemName,itemPrice,itemNum) => {
    //     alert(`You ordered: ${itemName} for ${itemPrice} , count is ${itemNum}`)
    // }
    const handleOrder = (a,b,c) => {
        alert(`You ordered: ${a} for ${b} , count is ${c}`)
    }
    return (
        <div>
            <h2>Our Menu</h2>
            <MenuItems name="Pizza" price="12" num="1" onOrder={handleOrder} />
            <MenuItems name="Burger" price="8" num="1" onOrder={handleOrder} />
            <MenuItems name="Salad" price="6" num="2" onOrder={handleOrder} />
        </div>
    )
}

// Parent (Menu) - passes props -> MenuItems({ name, price, onOrder }) - button clicked 
// -> onClick runs -> onOrder(name, price) -> handleOrder(name, price) in the parent