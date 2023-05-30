import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


import MyPostsContainer from "./My Posts/MyPostsContainer";
type ProfilePropsType ={
  //  profilePage:ProfilePageType
    // addPost:(newText: string)=>void
    // updateNewPostText: (newText:string)=>void
  //  dispatch:(action:ActionsTypes)=>void
  //  store:StoreType
}
function Profile(props:ProfilePropsType){

    return(
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer
              // store={props.store}
            />
            </div>
    )
}
export default Profile;