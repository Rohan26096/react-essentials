import { useState } from "react"

export const BatchingCounter = () => {
    const [count, setCount] = useState(0)
    const [name,setName] = useState("")
    const [isActive,setIsActive] = useState(false)
    console.log("Render phase: Component rendering with count = ", count); // count: 16

    const handleCount = () => {
        setCount((prev) => {
            return prev + 1
        }) // 0+1

        setCount((prev) => {
            return prev + 5
        }) // 0+5

        setCount((prev) => {
            return prev + 10
        }) // 0+10

        setName("Updated")
        setIsActive(true)

    }
    return <div>
        <h2> Count: {count} </h2>
        <p>Name: {name} </p>
        <p>Active: {isActive ? "Yes" : "No"} </p>
        <button onClick={handleCount}>Update all three</button>
    </div>
}