import { useReducer } from "react"

const initialCount = 0;
const countReducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initalState
        default:
            return state;
    }

}
const init = (initialValue) => {
    console.log("init func called - this only runs once!!");

    const savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
        console.log("Found saved count:", savedCount);
        return parseInt(savedCount)

    }
    console.log("No saved count, using inital value:", initialValue);
    return initialValue;
}
export const CounterWithInit = () => {
    const [count, dispatch] = useReducer(countReducer, initialCount, init)
    return (
        <div>
            <p>Count: {count}  </p>
            <button onClick={() => dispatch("increment")} >Increment</button>
            <button onClick={() => dispatch("decrement")} >Decrement</button>
            <button onClick={() => dispatch("reset")} >Reset</button>
        </div>
    )
}