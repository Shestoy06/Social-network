import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'
import {getUserStatus} from "../../../redux/profilePage-reducer";

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
            <div className={s.status}>
                {editMode ?
                    <input type="text" value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}/>
                    :
                    <span onDoubleClick={activateEditMode}>{props.status ? props.status : 'No status'}</span>}
            </div>
        );


};

export default ProfileStatus;