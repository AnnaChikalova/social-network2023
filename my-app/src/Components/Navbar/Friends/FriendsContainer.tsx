import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import {AppStateType} from "../../../Redux/redux-store";
import {FriendType, InitialStateType} from "../../../Redux/sidebar-reducer";
import {connect} from "react-redux";
import Friends from "./Friends";

type MapStatePropsType={
    friends: Array<FriendType>
}
export type FriendsPropsType= MapStatePropsType
let mapStateToProps=(state:AppStateType):MapStatePropsType=>{
    return {
        friends:state.sidebar.friends
    }
}
const FriendsContainer = connect(mapStateToProps)(Friends)
export default FriendsContainer;