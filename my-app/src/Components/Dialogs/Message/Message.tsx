import s from "../Dialogs.module.css";
import React from "react";
import { MessageType } from "../../../Redux/dialogs-reducer";


function Message(props:MessageType) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}
export default Message;