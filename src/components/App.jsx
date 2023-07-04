import React from 'react';
import './All.css'
import './Profile/Profile.css';
import './Statistics/Statistics.css';
// import './FriendList/FriendList.css'
import './TransactionHistory/TransactionHistory.css'
import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json'
import transactions from '../path/transactions.json'
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory'

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
        dataList={ data }
        title='Upload stats' 
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
