import {
    ActionsTypes,
    AddMessageActionType,

    UpdateNewMessageTextActionType,

} from "./store";

export type DialogType = {
    name: string
    id: number
}
export type MessageType = {
    message: string
    id: number
}
export type InitialStateType = typeof initialState


const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const addMessageAC = (newMessageText: string): AddMessageActionType =>
    ({type: ADD_MESSAGE, newMessageText: newMessageText})

export const UpdateNewMessageTextAC = (newMessageText: string): UpdateNewMessageTextActionType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText})

let initialState = {
    dialogs: [
        {name: 'Anya', id: 1},
        {name: 'Sveta', id: 2},
        {name: 'Katya', id: 3},
        {name: 'Alyona', id: 4},
        {name: 'Asia', id: 5},
        {name: 'Ira', id: 6},
    ] as Array<DialogType>,
    messages: [
        {message: 'Hi', id: 1},
        {message: 'How are you?', id: 2},
        {message: 'Hello', id: 3},
    ] as Array<MessageType>,
    NewMessageText: ''
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessageText}],
                NewMessageText: ' '
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                NewMessageText: action.newMessageText
            }
        default:
            return state;
    }
}
export default dialogsReducer;