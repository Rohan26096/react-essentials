import { useState } from "react"

export const SimpleCounter = () => {
    const [count, setCount] = useState(0)


    //console.log("Render phase: Component rendering with count = ", count); // count: 1
    // const handleCount = () => {
    //     console.log("Before setCount: ", count); // count: 0

    //     setCount(count + 1)
    //     console.log("Still in Trigger phase. After setCount: ", count); // count:0

    // }


    console.log("Render phase: Component rendering with count = ", count); // count: 10

    const handleCount = () => {
        setCount(count + 1) // 0+1
        console.log("After setCount(count+1): ", count); // count:0
        setCount(count + 5) // 0+5
        console.log("After setCount(count+5): ", count); // count:0
        setCount(count + 10) // 0+10
        console.log("After setCount(count+10): ", count); // count:0

        setTimeout( ()=> {
            console.log("After 2 seconds, count is: ",count);
        },2000)
    }
    return <div>
        <h2> Count: {count} </h2>
        <button onClick={handleCount}>Increment</button>
    </div>
}