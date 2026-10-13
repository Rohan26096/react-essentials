import { useReducer } from "react"

const initalState = 0;
const reducer = () => {}

export const CounterWithReducer = () => {
    useReducer(reducer,initalState)
    return (
        <div>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    )
}