import { useState } from "react";

export const ToDoList = () => {
    const [items, setItems] = useState([
        { id: 1, text: "Learn React", done: false },
        { id: 2, text: "Build an app", done: false }
    ])
    const addItem = () => {
        const newItem = {
            id: Date.now(),
            text: "Deploy to production",
            done: false
        }
        // setItems([...items, newItem])
        setItems(items.concat(newItem))
    }
    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }
    // this func is correct but its not loading the done or undo button
    // const toggleDone = (id) => {
    //     setItems(
    //         items.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, done: !item.done }
    //             }
    //             return item;
    //         })
    //     )
    // }
    const toggleDone = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, done: !item.done }
                    : item
            )
        );
    };
    return (
        <div>
            <ul>
                {
                    items.map((item) => {
                        return (
                            <li key={item.id}>
                                <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
                                    {item.text}
                                </span>
                                <button onClick={() => toggleDone(item.id)} >{item.done ? "Undo" : "Done"}</button>
                                <button onClick={() => removeItem(item.id)} >Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={addItem} >Add Item </button>
        </div>

    )
}