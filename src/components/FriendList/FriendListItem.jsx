import styles from './FriendList.module.css'
const FriendListItem = ({friends}) => {
    
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

}









export default FriendListItem