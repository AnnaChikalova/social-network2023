
import React, { ChangeEvent } from "react";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import { Dispatch } from "redux";
//import {ActionsTypes, StateType} from "../../../Redux/store";

//type MyPostContainerPropsType = {
   // posts: Array<PostType>
    // // addPost: (newText:string) => void
    // newPostText: string
    // // updateNewPostText:(newText:string)=>void
    // dispatch:(action:ActionsTypes)=>void
   // store:StoreType
//}


// function MyPostsContainer(props: MyPostContainerPropsType) {
//     return <StoreContext.Consumer>
//         {(store) => {
//
//             // @ts-ignore
//             let state = store.getState()
//             let addPost = () => {
//                 //   props.addPost(props.newPostText);
//                 // @ts-ignore
//                 store.dispatch(addPostAC(store.getState().profilePage.newPostText))
//             }
//             // let postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCounter} id={p.id}/>)
//             let onPostChange = (value: string) => {
//                 // @ts-ignore
//                 store.dispatch(updateNewPostTextAC(value))
//             }
//
//
//          //(e.currentTarget.value)}
//
//     return <MyPosts addPost={addPost}
//                 updateNewPostText={onPostChange}
//                 posts={state.profilePage.posts}
//                 newPostText={state.profilePage.newPostText}/>
//         }}
//     </StoreContext.Consumer>
// }

type MapStatePropsType={
    posts:Array<PostType>
    newPostText:string
}
type MapDispatchToPropsType={
    updateNewPostText:(value:string)=>void
    addPost:(newPostText:string)=>void
}
export type MyPostsPropsType= MapStatePropsType & MapDispatchToPropsType

let mapStateToProps=(state:AppStateType):MapStatePropsType=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps=(dispatch: Dispatch):MapDispatchToPropsType=>{
    return {
        updateNewPostText:(value:string)=>{
            dispatch(updateNewPostTextAC(value))
        },
        addPost:(newPostText:string)=>{
            dispatch(addPostAC(newPostText))
        }

    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;