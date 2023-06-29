import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {usersIcon,
    settingsIcon,
    profileIcon,
    newsIcon,
    musicIcon,
    letterIcon} from '../../img/images'

function Navbar(props) {

    const activeLinkClass = (navData) => {
        if (navData.isActive) {
            return s.navbar__link_active
        } else {
            return s.navbar__link

        }
    }
    return (
        <nav className={s.navbar}>
            <div className={s.navbar__logo}>RUPPLE</div>
            <ul className={s.navbar__list}>
                <li><NavLink className={navData => activeLinkClass(navData)} to="/profile">
                    <img src={profileIcon} alt=""/>
                    Profile
                </NavLink></li>
                <li><NavLink className={navData => activeLinkClass(navData)} to="/dialogs">
                    <img src={letterIcon} alt=""/>
                    Messages
                </NavLink></li>
                <li><NavLink className={navData => activeLinkClass(navData)} to="/news">
                    <img src={newsIcon} alt=""/>
                    News
                </NavLink></li>
                <li><NavLink className={navData => activeLinkClass(navData)} to="/music">
                    <img src={musicIcon} alt=""/>
                    Music
                </NavLink></li>
                <li><NavLink className={navData => activeLinkClass(navData)} to="/users">
                    <img src={usersIcon} alt=""/>
                    Users
                </NavLink></li>
                <li><NavLink className={navData => activeLinkClass(navData)} to="/settings">
                    <img src={settingsIcon} alt=""/>
                    Settings
                </NavLink></li>
                <button onClick={props.logout}>Logout</button>
                <Friends friendsData={props.friendsData}/>
            </ul>
            <div className={s.credits}>
                <span>Made with ❤️ by Andrei Silin</span>
            </div>
        </nav>
    )
}

export default Navbar