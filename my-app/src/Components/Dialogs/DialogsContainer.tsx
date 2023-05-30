import React, {ChangeEvent} from "react";
import {addMessageAC, InitialStateType, UpdateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import Dialogs from './Dialogs'
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
// type DialogsContainerPropsType={
//     //dialogsPage:DialogsPageType
//     // addMessage:(postMessage:string)=>void
//     // updateNewMessageText:(NewMessageText:string)=>void
//    // dispatch:(action:ActionsTypes)=>void
//     store:StoreType
// }
// function DialogsContainer(props:DialogsContainerPropsType) {
//     let state=props.store.getState()
//     let addMessage=(postMessage:string)=>{
//      //   props.addMessage(props.dialogsPage.NewMessageText)
//        props.store.dispatch(addMessageAC(state.dialogsPage.NewMessageText))
//     }
//     let onMessageChange =(value:string)=>{
//         props.store.dispatch(UpdateNewMessageTextAC(value))}//(e.currentTarget.value)}
//
//     // @ts-ignore
//     return (
//         <Dialogs addMessage={addMessage}
//                  UpdateNewMessageText={onMessageChange}
//                  dialogsPage={state.dialogsPage}
//                  newMessageText={state.dialogsPage.NewMessageText}
//         />
//     )
// }
type MapStatePropsType={
    dialogsPage:InitialStateType
    newMessageText:string
}
type MapDispatchToPropsType={
    UpdateNewMessageText:(value:string)=>void
    addMessage:(newMessageText:string)=>void
}
export type DialogsPropsType= MapStatePropsType & MapDispatchToPropsType

let mapStateToProps=(state:AppStateType):MapStatePropsType=>{
    return {
        dialogsPage: state.dialogsPage,
        newMessageText:state.dialogsPage.NewMessageText
    }
}
let mapDispatchToProps=(dispatch: Dispatch):MapDispatchToPropsType=>{
    return {
        UpdateNewMessageText:(value:string)=>{
            dispatch(UpdateNewMessageTextAC(value))
        },
        addMessage:(newMessageText:string)=>{
            dispatch(addMessageAC(newMessageText))
        }

    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;