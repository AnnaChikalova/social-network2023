import {ActionsTypes} from "./store";

export type FriendType = {
    name: string
    id: number
}
export type InitialStateType = {
    friends: Array<FriendType>
}
let initialState: InitialStateType = {
    friends: [
        {name: 'Andrew', id: 1},
        {name: 'Sasha', id: 2},
        {name: 'Masha', id: 3},
    ]
}
const sidebarReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    return {
        ...state
    };
}
export default sidebarReducer;