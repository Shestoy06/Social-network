import React from "react";
import {sendMessage, updateNewMessageData} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import AuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const DialogsContainer = compose(
    AuthRedirect,
    connect(mapStateToProps, {sendMessage, updateNewMessageData})
)(Dialogs)

export default DialogsContainer