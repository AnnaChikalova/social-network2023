
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../Redux/users-reducer";
import Users from "./Users";
import {Dispatch} from "redux";



type MapStatePropsType={
    users: Array<any>
}
type MapDispatchToPropsType={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<any>)=>void

}
export type UsersPropsType= MapStatePropsType & MapDispatchToPropsType
let mapStateToProps=(state:AppStateType):MapStatePropsType=>{
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps=(dispatch: Dispatch):MapDispatchToPropsType=>{
    return {
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users:Array<UserType>)=>{
            dispatch(setUsersAC(users))
        }

    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;