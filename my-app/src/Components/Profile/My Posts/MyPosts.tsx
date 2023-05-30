import s from "./MyPosts.module.css";
import React, { ChangeEvent } from "react";
import Post from "./Post/Post";

import { MyPostsPropsType } from "./MyPostsContainer";

// type MyPostPropsType = {
//     posts: Array<PostType>
//     addPost: (newText:string) => void
//     newPostText: string
//     updateNewPostText:(newText:string)=>void
//    // dispatch:(action:ActionsTypes)=>void
// }
function MyPosts(props: MyPostsPropsType) {
    let addPost = () => {
        props.addPost(props.newPostText);
       // props.dispatch(addPostAC(props.newPostText))
    }
    let postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCounter} id={p.id}/>)
    let onPostChange =(e:ChangeEvent<HTMLTextAreaElement>)=>
    {props.updateNewPostText(e.currentTarget.value)} //(e.currentTarget.value)}

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea onChange={onPostChange}
                               value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;