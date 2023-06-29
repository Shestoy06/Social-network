import s from './Button.module.css'
import Preloader from "../Preloader/Preloader";
import preloader from "../../img/Dual Ring-1s-200px (1).gif";


const Button = (props) => {
    return (
        <button className={s.button} onClick={props.onClickFunction} disabled={props.disabled}>
            {props.disabled ? <div className={s.preloader}><img src={preloader} alt=""/></div> : <span>{props.text}</span>}
        </button>
    )
}

export default Button