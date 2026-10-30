import { useReducer } from "react"

const init = (initial) => {
    if(typeof initial === "function"){
        return initial()
    }
    return initial // returns 0
}
const useStateCustom = (initialValue) => {
    const reducer = (state,action) => { // reducer(5, prev => prev + 1);
        if(typeof action === "function"){
            return action(state)
        }
        return action
    }
    const [state,dispatch] = useReducer(reducer,initialValue,init)
    const setState = (newValue) => {
        dispatch(newValue)
    }
    return [state,setState]
}
export const CustomCounter1 = () => {
    const [count,setCount] = useStateCustom(0) // array destructuring 
    return <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)} >Increment</button>
        <button onClick={() => setCount(count - 1)} >Decrement</button>
        <button onClick={() => setCount(0)} >Reset</button>
        <button onClick={() => setCount((prev) => prev + 5)} >Increment with function</button>
    </div>
}