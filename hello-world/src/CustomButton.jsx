export const CustomButton = () => {

    const handleClick = () => {
        alert("Thanks for the Like")
    }
    return <button onClick={handleClick}>Like</button>
}