import React from 'react';
import s from './User.module.css'
import Button from "../../../UI/Button/Button";
import defaultAvatar from '../../../img/avatars/defaultUser.webp'
import {NavLink} from "react-router-dom";


const User = (props) => {

    let onFollow = () => {
        props.following(props.followed, props.id)
    }

    return (
        <div className={s.user}>
            <div className={s.user__content}>
                <div className={s.user__avatar}>
                    <NavLink to={'/profile/' + props.id}>
                        <img src={props.avatar !== null ? props.avatar : defaultAvatar} alt=""/>
                    </NavLink>
                </div>
                <div className={s.user__name}>{props.userName}</div>
                <div className={s.user__status}>{props.userData.status}</div>
                <div className={s.user__location}>{props.userData.location.city}</div>
            </div>
            <Button onClickFunction={onFollow} disabled={props.followingInProgress.some(id => id === props.id)} text={ props.followed ? 'Unfollow' : 'Follow' } />
        </div>
    )
};

export default User;