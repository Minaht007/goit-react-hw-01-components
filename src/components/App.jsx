
import {Profile} from './Profile/Profile';
import user from './data/user.json';
import Statistics from './Stats/stats';
import data from './data/data.json'
import FriendList from './FriendList/FriendList';
import friend from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
    username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      
      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friend} />;

      <TransactionHistory items={transactions} />;
    </div>
  );
};

