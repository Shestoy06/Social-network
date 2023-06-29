import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialogs__item}>
            <NavLink to={'/dialogs/' + props.id}>
                <img src={props.avatar} alt=""/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem