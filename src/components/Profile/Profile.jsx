import styles from './Profile.module.css'
import PropTypes from "prop-types";

const Profile = ({username, tag, location, avatar, stats: {followers, views, likes}}) => {
    
    return (

    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <h2 className={styles.name}>{ username }</h2>
        <p className={styles.tag}>@{ tag }</p>
                <p className={styles.location}>{ location }</p>
      </div>
    
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{ followers }</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{ views }</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{ likes }</span>
        </li>
      </ul>
    </div>
    
    )
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
}


export default Profile;