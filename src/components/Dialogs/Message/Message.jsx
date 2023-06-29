import s from '../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={ props.author === "user" ? s.dialogs__message : `${s.dialogs__message_friend} ${s.dialogs__message}`}><span>{props.message}</span></div>
    )
}

export default Message