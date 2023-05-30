import {
    ActionsTypes,
    AddPostActionType,
    UpdateNewPostTextActionType
} from "./store";

export type PostType = {
    message: string
    likesCounter: number
    id: number
}
export type InitialStateType={
    posts:Array<PostType>
    newPostText:string

}
const ADD_POST='ADD-POST'
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
export const addPostAC=(newPostText:string):AddPostActionType=>
    ({type:ADD_POST, newPostText:newPostText})

export const updateNewPostTextAC=(newPostText:string):UpdateNewPostTextActionType=>
    ({type:UPDATE_NEW_POST_TEXT, newPostText:newPostText})

let initialState:InitialStateType={
    posts: [
        {message: 'Hi, How are you?', likesCounter: 5, id: 1},
        {message: 'Hello', likesCounter: 15, id: 2}
    ],
    newPostText: ''
}
const profileReducer=(state: InitialStateType = initialState, action:ActionsTypes): InitialStateType=>{
   switch (action.type) {
       case UPDATE_NEW_POST_TEXT:
           return {
               ...state,
               newPostText: action.newPostText
           }
       case  ADD_POST :
           return {
               ...state,
               newPostText: ' ',
               posts: [...state.posts, {id: 3, message: action.newPostText, likesCounter: 0}]
           }
       default:
           return state
   }
}
export default profileReducer;