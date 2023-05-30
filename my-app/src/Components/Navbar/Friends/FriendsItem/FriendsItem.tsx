
import React from "react";
import { FriendType } from "../../../../Redux/sidebar-reducer";

import s from './FriendsItem.module.css'
function FriendsItem(props:FriendType) {
    return (
        <span className={s.friendsItem}>
            <img src='https://i.pinimg.com/236x/62/7e/64/627e64a7cff5b67802e0adaccd96005b.jpg'/>
            <div>
            <span>{props.name}</span>
            </div>
        </span>
    )
}
export default FriendsItem;