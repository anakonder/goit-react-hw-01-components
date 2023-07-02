import React from 'react';
import './All.css'
import './Profile.css';
import './Statistics.css';
import './FriendList.css'
import './TransactionHistory.css'
import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json'
import transaction from '../path/transactions.json'
import Profile from './Profile'
import Statistics from './Statistics';
import FriendList from './FriendList';

// console.log(friends)

const { followers, views, likes } = user.stats


export const App = () => {
  return(
  <div className='app-wrap'>        
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={{
        followers: followers,
        view: views,
        likes: likes,
      }}
      />
    <Statistics
        dataList={ data }
        title={ 'Upload stats' }
      />
    <FriendList
      friends={ friends }
      />
  </div>
  )
};
