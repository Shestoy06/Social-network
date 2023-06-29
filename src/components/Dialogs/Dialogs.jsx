import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import Button from "../../UI/Button/Button";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Dialogs = (props) => {

    let dialogsItems = props.dialogsData
        .map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar}/> )

    let messagesItems = props.messagesData
        .map ( item => <Message message={item.message} key={item.id} author={item.author}/>)

    let onSendMessage = () => {
        if (props.newMessageText !== '') props.sendMessage()
    }

    let onUpdateNewMessageData = (e) => {
        let text = e.target.value
        props.updateNewMessageData(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                { dialogsItems }
            </div>
            <div className={s.dialogs__messages}>
                <div className={s.dialogs__messagesItems} >
                    {messagesItems.reverse()}
                </div>
                <input onChange={ onUpdateNewMessageData }
                       value={props.newMessageText}
                       type="text" placeholder="New message..." className={s.dialogs__input}/>
                <Button onClickFunction={ onSendMessage } text='Send'/>
            </div>
        </div>
    )
}

export default Dialogs