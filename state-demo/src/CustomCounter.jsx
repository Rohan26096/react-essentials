import { useReducer } from "react";


// lazy initialization 
const init = (initial) => {
    if(typeof initial === "function"){
        return initial()
    }
    return initial; // returns 0
}
const useStateCustom = (initialValue) => {
    const reducer = (state,action) => { // reducer(5, prev => prev + 1);
        if(typeof action === "function"){
            return action(state)
        }
        return action;
    }
    const [state,dispatch] = useReducer(reducer,initialValue,init)

    const setState = (newValue) => {
        dispatch(newValue)
    }
    return [state,setState]
}

export const CustomCounter = () => {
    const [count,setCount] = useStateCustom(0) // returns [state,setState]

    // passing expensive initial value, renders only 1 time while initializing 
    // const [data,setData] = useStateCustom(() => {
    //     console.log("Expensive initalization");
    //     return Array(100).fill(0)
    // })

    return <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)} >Increment</button>
        <button onClick={() => setCount(count - 1)} >Decrement</button>
        <button onClick={() => setCount(0)} >Reset</button>
        <button onClick={() => setCount((prev) => prev + 5)} >Increment with function</button>
    </div>
}