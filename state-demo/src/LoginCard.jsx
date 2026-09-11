import { useState } from "react"

export const LoginCard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [message, setMessage] = useState("")

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    return (
        <>
            <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"} </button>
            <div>
                <input type="text" placeholder="Type a Message" value={message} onChange={handleChange} />
            </div>
            <p> {message}  </p>
        </>
    )
}