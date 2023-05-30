import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'
import Friends from "./Friends/Friends";
import {SidebarType} from "../../Redux/store";
import FriendsContainer from "./Friends/FriendsContainer";
import UsersContainer from "../Users/UsersContainer";
type NavbarPropsType={
   // sidebar:SidebarType
}
function Navbar(props:NavbarPropsType) {
    return (
        <nav className={s.navbar}>
            <div className={s.item}>
                <NavLink  to='/profile'> Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.activeLink}`}>
                <NavLink to='/dialogs'> Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'> News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'> Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <div>
                <FriendsContainer //sidebar={props.sidebar}
                />
                {/*<UsersContainer/>*/}
            </div>
        </nav>
    )
}

export default Navbar;