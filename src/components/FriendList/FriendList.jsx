import FriendListItem from './FriendListItem'
import styles from './FriendList.module.css'
import PropTypes from "prop-types";

const FriendList = ({friends}) => {
    
    return (

        <ul className={styles.friendList}>
            <FriendListItem
            friends={friends}
            />
        </ul>
        
    )
}

FriendList.propTypes = {
    friends: PropTypes.array
}

export default FriendList