import s from "./Post.module.css";
import React from "react";
import {PostType} from "../../../../Redux/store";

function Post(props:PostType) {
    return (
        <div className={s.post}>
            <img src='https://notagram.ru/wp-content/uploads/2019/10/882f731c489ebca3136c76dad264b9b0.jpg'/>
            {props.message}
            <div>
                <span>like</span>{props.likesCounter}
            </div>
        </div>
     )
}
export default Post;