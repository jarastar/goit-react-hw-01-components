import user from '../data/user.json';
import Profile from './Profile/Profile'
import data from '../data/data.json';
import Statistics from './Statistics/Statistics'
import friends from '../data/friends.json';
import FriendsList from './Friends/FriendList'
import transactions from '../data/transactions.json';
import TransactionHistory from './Transactions/TransactionHistory'

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

export const App = () => {
  return (
    <div className="center">
      <Profile   
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes}/>
      <Statistics 
          title="Upload stats" stats={data}
          />
      <FriendsList
          friends={friends}
          />
      <TransactionHistory
          items={transactions}
          />
    </div>
  );
};
