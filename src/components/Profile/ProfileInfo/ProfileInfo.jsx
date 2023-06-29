import s from "./ProfileInfo.module.css";
import defaultUser from "../../../img/avatars/defaultUser.webp";
import ProfileStatus from "./ProfileStatus"
import {getUserStatus, updateUserStatus} from "../../../redux/profilePage-reducer";

const ProfileInfo = (props) => {

    let avatarPhoto = props.profile.photos.large ? props.profile.photos.large : defaultUser

    return (
        <div className={s.profile__info}>
            <div className={s.profile__content}>
                <div className={s.profile__avatar}>
                    <img className={s.avatarImage} src={avatarPhoto} alt=""/>
                </div>
                <div className={s.profile__bio}>
                    <div className={s.profile__name}>{props.profile.fullName}</div>
                    <div className={s.profile__additionalInfo}>
                        <div className={s.profile__item}>About Me: {props.profile.aboutMe}</div>
                        <div className={s.profile__item}>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
                        <div className={s.profile__item}>Github: <a href={`https://${props.profile.contacts.github}`}>Link</a></div>
                    </div>
                </div>
            </div>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
    )


}

export default ProfileInfo