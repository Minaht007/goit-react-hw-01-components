import PropTypes from 'prop-types';

import onLineStyle from './friends.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className={isOnline ? onLineStyle.onLine : onLineStyle.offLine}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes={
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,  
}
