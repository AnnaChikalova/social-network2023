import {ActionsTypes} from "./store";

export type UserType = {
    // id: number
    // fullName:string
    // status:string
    // followed:boolean
    // photoUrl: string
    // location:{
    //     city:string
    //     country:string
    // }
}
export type InitialStateType = {
    users: Array<any>,
    pageSize:number
    totalCount: number
    currentPage:number
}
const FOLLOW='FOLLOW'
const UNFOLLOW='UNFOLLOW'
const SET_USERS= 'SET-USERS'
const SET_CURRENT_PAGE= 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
let initialState: InitialStateType = {
    users: [
        // {id:1, photoUrl:'https://st2.depositphotos.com/4350129/12167/i/600/depositphotos_121673080-stock-photo-cute-cartoon-yoga-girl.jpg' , fullName: 'Anna', status:'I am a developer', followed: false, location: {city:'Zaporozhye', country:'Ukraine'}},
        // {id:2, photoUrl:'https://st2.depositphotos.com/4350129/12167/i/600/depositphotos_121673080-stock-photo-cute-cartoon-yoga-girl.jpg' , fullName: 'Asia', status:'I am a teacher', followed: true, location: {city:'Moscow', country:'Russia'}},
        // {id:3, photoUrl: 'https://st2.depositphotos.com/4350129/12167/i/600/depositphotos_121673080-stock-photo-cute-cartoon-yoga-girl.jpg' , fullName: 'Katya', status:'I am an engineer', followed: false, location: {city:'Zaporozhye', country:'Ukraine'}},
        // {id:4, photoUrl: 'https://st2.depositphotos.com/4350129/12167/i/600/depositphotos_121673080-stock-photo-cute-cartoon-yoga-girl.jpg' , fullName: 'Alyona', status:'I am a teacher', followed: false, location: {city:'Zaporozhye', country:'Ukraine'}}
    ],
    pageSize:5,
    totalCount:0,
    currentPage:1
}
const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
   switch (action.type){
       case FOLLOW:
    return {
    ... state,
        users: state.users.map(u=> {
        if(u.id=== action.userId){
        return {...u, followed:true}
        }
        return u
    })
    }
       case UNFOLLOW:
    return {
    ...state,
    users:state.users.map(u=>{
        if(u.id===action.userId) {
            return {...u, followed:false}
        }
        return u
    })
    }
       case SET_USERS: {
           return {...state, users: [...action.users, ...state.users]}
       }
       case SET_CURRENT_PAGE: {
           return {...state, currentPage: action.currentPage }
       }
       case SET_TOTAL_COUNT: {
           return {...state, totalCount: action.totalCount }
       }
       default:
           return state;
   }
}
export let followAC=(userId:number)=> ({type: FOLLOW, userId})
export let unFollowAC=(userId:number)=> ({type: UNFOLLOW, userId})
export let setUsersAC=(users:Array<any>)=> ({type: SET_USERS, users})
export let setCurrentPageAC=(currentPage:number)=> ({type: SET_CURRENT_PAGE, currentPage})
export let setTotalCountAC = (totalCount:number)=>({type: SET_TOTAL_COUNT, totalCount})

export default usersReducer;