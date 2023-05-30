
import s from "../../Profile/My Posts/Post/Post.module.css";
import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import {FriendsPropsType} from "./FriendsContainer";

function Friends (props:FriendsPropsType) {
    let friendsElement=props.friends.map(f=><FriendsItem name={f.name} id={f.id}/>)
    return (
        <div>
        <h3>Friends</h3>
        <div className={s.friend}>
            {friendsElement}
        </div>
    </div>
    )
}
export default Friends;