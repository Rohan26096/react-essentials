import { ActionButton } from "./ActionButton"

export const NewsLetter = () => {
    const handleSubscribe = () => {
        alert("Thank you for subscribing!")
    }
    return (
        <div>
            <h2>Subscribe to NewsLetter</h2>
            <ActionButton text="Subscribe" onclick={handleSubscribe}/>
        </div>
    )
}