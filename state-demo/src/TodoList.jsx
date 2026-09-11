import { useState } from "react"

export const TodoList = () => {
    const [items, setItems] = useState([
        { id: 1, text: "Learn React" },
        { id: 2, text: "Build an app" },
    ])
    console.log("Rendering with items: ", items);

    return (
        <div>
            <ul>
                {
                    items.map((item) => {
                        return <li key={item.id}>{item.text}</li>
                    })
                }
            </ul>
        </div>
    )
}