import styles from './FriendList.module.css'
import PropTypes from "prop-types";

const FriendListItem = ({friends}) => {
    return (
        friends.map((friend) => 
            <li key={friend.id} className={styles.item}>
                {friend.isOnline ? <span className={styles.status} style={{backgroundColor: "green"}}></span> : <span className={styles.status} ></span>}  
                <img
                    className={styles.avatar}
                    src={ friend.avatar }
                    alt="User foto"
                />
                <p className={styles.name}>
                    {friend.name}
                </p>
        
        
            </li>
        )
        
    )

}

FriendListItem.propTypes = {
    friends: PropTypes.array
}







export default FriendListItem