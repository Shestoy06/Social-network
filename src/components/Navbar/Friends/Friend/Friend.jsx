import s from "../../Navbar.module.css";
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <NavLink className={s.navbar__friend} to={'dialogs/' + props.id}>
            <img src={props.avatar} alt=""/>
        </NavLink>
    )
}

export default Friend