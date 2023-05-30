import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


// type DialogsPropsType={
//      dialogsPage:DialogsPageType
//      addMessage:(postMessage:string)=>void
//      newMessageText:string
//      updateNewMessageText:(NewMessageText:string)=>void
//     //dispatch:(action:ActionsTypes)=>void
// }
function Dialogs(props:DialogsPropsType) {
    let addMessage=()=>{
       props.addMessage(props.newMessageText)
      // props.dispatch(addMessageAC(props.dialogsPage.NewMessageText))
    }
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements =props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)
    let onMessageChange =(e:ChangeEvent<HTMLTextAreaElement>)=>{props.UpdateNewMessageText(e.currentTarget.value)}//(e.currentTarget.value)}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div><textarea onChange={onMessageChange}
                           value={props.dialogsPage.NewMessageText} /></div>
            <div><button onClick={addMessage}>Add message</button></div>
        </div>

    )
}

export default Dialogs;