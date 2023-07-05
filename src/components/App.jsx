import React from 'react';
import './All.css'
import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json'
import transactions from '../path/transactions.json'
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory'
import PropTypes from "prop-types";
// console.log(friends)


export const App = () => {
  return(
  <div className='app-wrap'>        
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
        
      />
    <Statistics
        title='Upload stats' 
        stats={ data }
      />
    <FriendList
       friends={ friends }
        
      />
    <TransactionHistory
        items={transactions}
      />
  </div>
  )
};

Profile.PropTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired
}

Statistics.PropTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}

TransactionHistory.PropTypes = {
  items: PropTypes.array.isRequired
}
