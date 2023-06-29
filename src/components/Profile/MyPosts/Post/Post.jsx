import s from "./Post.module.css";
import defaultAvatar from "../../../../img/avatars/defaultUser.webp"
import heart from "../../../../img/heart-svgrepo-com.svg"

function Post(props) {
    let profileImage = props.profileImage
    if (!profileImage) {
        profileImage = defaultAvatar
    }
    return (
        <div className={s.post}>
            <div className={s.post__content}>
                <img src={profileImage} alt=""/>
                <span>{props.message}</span>
            </div>
            <div className={s.post__likes}>
                <span>{props.likes}</span>
                <img src={heart} alt=""/>
            </div>
        </div>
    )
}

export default Post