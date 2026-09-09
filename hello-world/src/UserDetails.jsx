export const UserDetails = ({name,isOnline, hideOffline, isPremuim, isNewUser}) => {
    if(hideOffline && !isOnline){
        return null;
    }
    // if(isOnline){
    //     return(
    //         <div>
    //             <h3>{name}</h3>
    //             <span>🟢 Online </span>
    //             <p>Available for chat</p>
    //             <button>Send Message</button>
    //         </div>
    //     )
    // }
    // return (
    //     <div>
    //         <h3>{name}</h3>
    //         <span>🔴 Offline </span>
    //         <p>Not available for chat</p>
    //         <small>Check back later</small>
    //     </div>
    // )
    return (
        <div>
            <h3>
                {name} 
                {isPremuim && <span>⭐️</span>} {/* isPremuim render span */}
                {isNewUser && <span>🎉</span>} {/* isNewUser render span */}
                </h3>
            <span> {isOnline ? "🟢 Online" : "🔴 Offline"} </span>
            <p>{isOnline ? "Available for chat" : "Not available for chat"} </p>
            {isOnline ? (
                <button>Send Message</button>
            ) : (
                <small>Check back later</small> 
            )}
        </div>
    )
}