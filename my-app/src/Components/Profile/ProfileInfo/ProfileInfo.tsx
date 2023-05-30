import React from "react";
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNh5bUmEsqTo_euEM7kfoYthYnJXV71ehH7A&usqp=CAU'/>
            <div className = {s.descriptionBlock}>ava+description</div>
        </div>
    )
}
export default ProfileInfo;