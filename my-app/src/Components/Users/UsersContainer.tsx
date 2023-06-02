import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC, UserType} from "../../Redux/users-reducer";
import {Users} from "./UsersClass";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";

export class UsersContainerComponent extends React.Component<any, any>{
    constructor(props:any) {
        super(props);

    }
    componentDidMount() {
        if (this.props.users.length===0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((res)=>{
                    this.props.setUsers(res.data.items)
                    this.props.setTotalCount(res.data.totalCount)
                })
        }
    }
    onPageChanged =(currentPage:number)=>{
        this.props.setCurrentPage(currentPage)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((res)=>{
                this.props.setUsers(res.data.items)
            })
    }


    render() {
        return (
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        )

    }
}

type MapStatePropsType={
    users: Array<any>
    pageSize:number
    totalCount: number
    currentPage:number
}
type MapDispatchToPropsType={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<any>)=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalCount: (totalCount:number)=>void


}
export type UsersPropsType= MapStatePropsType & MapDispatchToPropsType
let mapStateToProps=(state:AppStateType):MapStatePropsType=>{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount:number)=> {
            dispatch(setTotalCountAC(totalCount))
        }

    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent)
export default UsersContainer;