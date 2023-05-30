import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import ava from './img/ava.png'
function Users(props:UsersPropsType) {
    const onClickGetUsers =()=>{
        if (props.users.length===0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then((res)=>{
                    props.setUsers(res.data.items)
                })
        }
    }
    return(
        <div>
            <button onClick={onClickGetUsers}>Get users</button>
            <div>
                {props.users.map(u=>
                        <div key={u.id}>
                <span>
                    <div>
                      <img src={u.photos.small? u.photos.small:ava } className={styles.userPhoto}/>
                    </div>
                    <div>

                        {
                            u.followed
                                ? <button onClick={()=>{props.unfollow(u.id)}}>
                                    Unfollow</button>
                                : <button onClick={()=>{props.follow(u.id)}}>
                                    Follow</button>
                        }
                    </div>
                </span>
                            <span>
                    <span>
                        <div>{u.name}</div>
                        {/*<div>{u.status}</div>*/}
                    </span>
                    <span>
                        <div>{'Ukraine'}</div>
                        {/*<div>{u.location.country}</div>*/}
                        {/*<div>{u.location.city}</div>*/}
                        <div>{'Kyiv'}</div>
                    </span>

                </span>

                        </div>
                )
                }
            </div>
        </div>

)
}
export default Users;


