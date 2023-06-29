import s from './Profile.module.css'
import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserData, getUserStatus, setUserProfile, updateUserStatus} from "../../redux/profilePage-reducer";
import withRouter from "../../withRouter";
import Preloader from "../../UI/Preloader/Preloader";
import {Navigate} from "react-router-dom";
import AuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {getProfile, getProfileSuper, getStatus, getUserAuthData} from "../../redux/profilePage-reselector";


class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.userData.userId
        }

        this.props.getUserData(userId)
        this.props.getUserStatus(userId)
        console.log(this.props.status)
    }

    render() {

        if (!this.props.profile) return <Preloader/>

        return (
            <div className={s.profile}>
                <Profile {...this.props}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    userData: getUserAuthData(state),
})

const ProfileContainerCompose = compose(
    AuthRedirect,
    withRouter,
    connect(mapStateToProps, {setUserProfile, getUserData, getUserStatus, updateUserStatus})
)(ProfileContainer)


export default ProfileContainerCompose
