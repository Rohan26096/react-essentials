import { useState } from "react"

export const PrevStateCounter = () => {
    const [count, setCount] = useState(0)

    console.log("Render phase: Component rendering with count = ", count); // count: 16

    // const handleCount = () => {
    //     setCount(count + 1) // 0+1
    //     console.log("After setCount(count+1): ", count); // count:0
    //     setCount(count + 5) // 0+5
    //     console.log("After setCount(count+5): ", count); // count:0
    //     setCount(count + 10) // 0+10
    //     console.log("After setCount(count+10): ", count); // count:0

    //     setTimeout(() => {
    //         console.log("After 2 seconds, count is: ", count);
    //     }, 2000)
    //}


    // const handleCount = () => {
    //     setCount((prev) => prev + 1) // 0+1
    //     console.log("After setCount(prev => prev + 1): ", count); // count:0

    //     setCount((prev) => prev + 5) // 0+5
    //     console.log("After setCount(prev => prev + 5): ", count); // count:0

    //     setCount((prev) => prev + 10) // 0+10
    //     console.log("After setCount(prev => prev + 10): ", count); // count:0

    // }
    const handleCount = () => {
        setCount((prev) => {
            console.log("First updated fn: prev count = ", prev);
            return prev + 1
        }) // 0+1

        setCount((prev) => {
            console.log("Second updated fn: prev count = ", prev);
            return prev + 5
        }) // 0+5

        setCount((prev) => {
            console.log("Second updated fn: prev count = ", prev);
            return prev + 10
        }) // 0+10

    }
    return <div>
        <h2> Count: {count} </h2>
        <button onClick={handleCount}>Increment</button>
    </div>
}