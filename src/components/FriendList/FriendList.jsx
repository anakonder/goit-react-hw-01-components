import FriendListItem from './FriendListItem'
import styles from './FriendList.module.css'
const FriendList = ({friends}) => {
    console.log(friends)
    return (

        <ul className={styles.friendList}>
            <FriendListItem
            friends
            />
        </ul>
        
    )
}


export default FriendList