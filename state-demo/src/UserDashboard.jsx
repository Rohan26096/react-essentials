import { useState } from "react"

export const UserDashboard = ({isPremuim}) => {

    const [credits,setCredits] = useState(100)

    if(!isPremuim){
        return <div>Upgrade to premuim to see credits</div>
    }
    return <div>
        <p> You have {credits}</p>
        <button onClick={() => setCredits(0)}>Spend all credits </button>
    </div>
}