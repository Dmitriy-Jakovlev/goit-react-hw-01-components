import React from "react";
import PropTypes from "prop-types";
import styles from "./friendList.module.css";
// import FriendListItem from "./FriendListItem";
import friends from './friends.json'

const FriendList = () => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span
            className={
              friend.isOnline ? styles.statusOnline : styles.statusOffline
            }
          ></span>

          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="friendAvatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};