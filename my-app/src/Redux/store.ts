import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {UserType} from "./users-reducer";

 type DialogType = {
    name: string
    id: number
}
 type MessageType = {
    message: string
    id: number
}
export type PostType = {
    message: string
    likesCounter: number
    id: number
}
type FriendType = {
    name: string
    id: number
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    NewMessageText: string
}
 type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type SidebarType = {
    friends: Array<FriendType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type AddPostActionType = {
    type:'ADD-POST'
    newPostText:string
}
export type AddMessageActionType = {
    type:'ADD-MESSAGE'
    newMessageText:string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText:string
}
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText:string
}
export type FollowActionType = {
    type:'FOLLOW'
    userId:number
}
export type UnfollowActionType = {
    type:'UNFOLLOW'
    userId:number
}
export type setUsersActionType = {
    type:'SET-USERS'
    users:Array<UserType>
}
export type setCurrentPageACType = {
    type:'SET-CURRENT-PAGE'
    currentPage:number
}
export type setTotalCountACType = {
    type:'SET-TOTAL-COUNT'
    totalCount:number
}


export type ActionsTypes= AddPostActionType|
                   AddMessageActionType|
                   UpdateNewPostTextActionType|
                   UpdateNewMessageTextActionType|
                   FollowActionType|
                   UnfollowActionType|
                   setUsersActionType|
                   setCurrentPageACType|
                   setTotalCountACType



export type StoreType = {
    _state: StateType
    // addPost: (newText: string) => void
    // addMessage: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    // updateNewMessageText: (NewMessageText: string) => void
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch:(action:ActionsTypes)=>void
}



let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi, How are you?', likesCounter: 5, id: 1},
                {message: 'Hello', likesCounter: 15, id: 2}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {name: 'Anya', id: 1},
                {name: 'Sveta', id: 2},
                {name: 'Katya', id: 3},
                {name: 'Alyona', id: 4},
                {name: 'Asia', id: 5},
                {name: 'Ira', id: 6},
            ],
            messages: [
                {message: 'Hi', id: 1},
                {message: 'How are you?', id: 2},
                {message: 'Hello', id: 3},
            ],
            NewMessageText: ''

        },
        sidebar: {
            friends: [
                {name: 'Andrew', id: 1},
                {name: 'Sasha', id: 2},
                {name: 'Masha', id: 3},
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    // addPost() {
    //     let newPost: PostType = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likesCounter: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ' ';
    //     this._callSubscriber();
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: 4,
    //         message: this._state.dialogsPage.NewMessageText,
    //     }
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.NewMessageText = ' '
    //     this._callSubscriber()
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber()
    // },
    // updateNewMessageText(NewMessageText: string) {
    //     this._state.dialogsPage.NewMessageText = NewMessageText;
    //     this._callSubscriber()
    // },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()

    }
}


export default store;
