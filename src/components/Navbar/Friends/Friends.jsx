import s from "../Navbar.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsItems = props.friendsData
        .map( item => <Friend avatar={item.avatar} id={item.id} key={item.id}/>)

    return (
        <li className={`${s.navbar__link} ${s.navbar__link_friend}`} to="/dialogs">
            Friends
            <div className={s.navbar__friends}>
                { friendsItems }
            </div>
        </li>
    )
}

export default Friends