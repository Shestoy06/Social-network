import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../UI/Preloader/Preloader";
import { Navigate } from "react-router-dom";
import React from "react";
import {getUserStatus, updateUserStatus} from "../../redux/profilePage-reducer";

function Profile(props) {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
