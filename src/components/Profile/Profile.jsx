const Profile = (props) => {
    const {followers, views, likes} = props.stats
    return (

    <div className="profile">
      <div className="description">
        <img
          src={props.avatar}
          alt="User avatar"
          className="avatar"
        />
        <h2 className="name">{ props.username }</h2>
        <p className="tag">@{ props.tag }</p>
                <p className="location">{ props.location }</p>
      </div>
    
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{ followers }</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{ views }</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{ likes }</span>
        </li>
      </ul>
    </div>
    
    )
}


export default Profile;