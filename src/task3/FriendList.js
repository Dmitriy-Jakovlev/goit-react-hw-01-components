import React from "react";
import PropTypes from "prop-types";
import styles from "./friendList.module.css";
import friends from './friends.json'
import FriendsListItem from "./FriendsListItem";

const FriendList = () => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({avatar, name, isOnline, id}) => (
        <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
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