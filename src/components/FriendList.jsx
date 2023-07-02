
const FriendList = (props) => {
    // console.log(props.friends[2].name)
    return (

        <ul className="friend-list">
            {props.friends.map((friend) => 
                <li key={friend.id} className="friend">
                    {friend.isOnline !== true ? <div className="light-bulb" style={{backgroundColor: "red"}}></div> : <div className="light-bulb"></div> }
                    <img
                        className="friend-avatar"
                        src={ friend.avatar }
                        alt="User foto"
                    />
                    <h2 className="friend-name">
                        {friend.name}
                    </h2>


                </li>
  )}
        </ul>
        
    )
}


export default FriendList