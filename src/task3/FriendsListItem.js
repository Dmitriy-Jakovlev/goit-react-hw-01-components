import React from "react";
import styles from "./friendList.module.css";


const FriendsListItem = ({id, avatar, isOnline, name}) => {
    return (<li key={id} className={styles.item}>
          <span
            className={
              isOnline ? styles.statusOnline : styles.statusOffline
            }
          ></span>

          <img
            className={styles.avatar}
            src={avatar}
            alt="friendAvatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>)
}

export default FriendsListItem;