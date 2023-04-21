import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.statusOnline : css.statusOffline}`}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
