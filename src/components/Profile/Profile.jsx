import styles from './Profile.module.css'

const Profile = (props) => {
    const {followers, views, likes} = props.stats
    return (

    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={props.avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <h2 className={styles.name}>{ props.username }</h2>
        <p className={styles.tag}>@{ props.tag }</p>
                <p className={styles.location}>{ props.location }</p>
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


export default Profile;