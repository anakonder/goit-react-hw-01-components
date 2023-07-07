import styles from './FriendListItem.module.css'
import PropTypes from "prop-types";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
         
            <li className={styles.item}>
                {isOnline ? <span className={styles.status} style={{backgroundColor: "green"}}></span> : <span className={styles.status} ></span>}  
                <img
                    className={styles.avatar}
                    src={avatar}
                    alt="User foto"
                />
                <p className={styles.name}>
                    {name}
                </p>
        
        
            </li>
        )
        
    

}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}







export default FriendListItem