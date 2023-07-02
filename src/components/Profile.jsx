const Profile = (props) => {
    const { username, tag, location, avatar, stats } = props
    const {followers, view, likes} = stats
    return (

    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <h2 className="name">{ username }</h2>
        <p className="tag">@{ tag }</p>
                <p className="location">{ location }</p>
      </div>
    
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{ followers }</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{ view }</span>
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