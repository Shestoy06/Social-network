import {connect} from "react-redux";
import {
    follow,
    setPage,
    unfollow,
    getUsers,
    toggleFollowingInProgress,
    following,
} from "../../redux/usersPage-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../UI/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount () {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (numberPage) => {
        this.props.setPage(numberPage)
        this.props.getUsers(this.props.pageSize, numberPage)
    }

    render() {
        return (
            <>
                { this.props.isLoaded === false ? <Preloader/> :
                    <Users onPageChanged={this.onPageChanged}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           usersData={this.props.usersData}
                           following={this.props.following}
                           followingInProgress={this.props.followingInProgress}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoaded: state.usersPage.isLoaded,
        followingInProgress: state.usersPage.followingInProgress
    }
}


UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setPage, getUsers, toggleFollowingInProgress, following
})(UsersContainer)

export default UsersContainer