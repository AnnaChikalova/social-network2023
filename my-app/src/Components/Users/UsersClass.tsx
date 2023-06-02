import React from 'react';
import ava from "./img/ava.png";
import styles from "./Users.module.css";

export type UsersPropsType = {
    users:Array<any>
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    unfollow:any
    follow:any
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div> {pages.map((p) => <span
            className={props.currentPage === p ? styles.currentPage : ''}
            onClick={(e) => props.onPageChanged(p)}
        >{p}</span>)}

            <div>
                {props.users.map((u: {
                        id: React.Key | null | undefined;
                        photos: { small: string | undefined; };
                        followed: any;
                        name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
                    }) =>
                        <div key={u.id}>
                <span>
                    <div>
                      <img src={u.photos.small ? u.photos.small : ava} className={styles.userPhoto}/>
                    </div>
                    <div>

                        {
                            u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>
                                    Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>
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