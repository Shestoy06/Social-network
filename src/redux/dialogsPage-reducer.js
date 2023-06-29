import avatar3 from "../img/avatars/ava3.jpg";
import avatar2 from "../img/avatars/ava2.jpg";
import avatar1 from "../img/avatars/ava1.jpg";
import avatar4 from "../img/avatars/ava4.jpg";
import avatar5 from "../img/avatars/ava5.png";
import avatar6 from "../img/avatars/ava6.png";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE-NEW-MESSAGE-DATA'

let initState = {
    dialogsData: [
        {id: 1, name: "Sacha", avatar: avatar3},
        {id: 2, name: "Dima", avatar: avatar2},
        {id: 3, name: "Valera", avatar: avatar1},
        {id: 4, name: "Victor", avatar: avatar4},
        {id: 5, name: "Hugo", avatar: avatar5},
        {id: 6, name: "Artem", avatar: avatar6},
    ],
    messagesData: [
        {id: 1, message: "Hi", author: "friend"},
        {id: 2, message: "How are you?", author: "user"},
        {id: 3, message: "Let's go out!", author: "friend"},
    ],
    newMessageText: ""
}

let dialogsPageReducer = (state = initState, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {id: 1, message: state.newMessageText, author: "user"}
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }


        case UPDATE_NEW_MESSAGE_DATA:
            return {
                ...state,
                newMessageText: action.newMessageValue
            }

        default:
            return state
    }
}

export const sendMessage = () => ( {type: ADD_MESSAGE} )
export const updateNewMessageData = (text) => (
    {type: UPDATE_NEW_MESSAGE_DATA, newMessageValue: text}
)



export default dialogsPageReducer