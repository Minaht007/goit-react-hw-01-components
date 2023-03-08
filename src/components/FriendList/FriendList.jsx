import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline }) => {
        return (
          <FriendListItem key={name} avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
    friends: PropTypes.array,
      avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}