import avatar1 from '../img/avatars/ava1.jpg'
import avatar2 from '../img/avatars/ava2.jpg'
import avatar3 from '../img/avatars/ava3.jpg'
import avatar4 from '../img/avatars/ava4.jpg'
import avatar5 from '../img/avatars/ava5.png'
import avatar6 from '../img/avatars/ava6.png'
import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import newsPageReducer from "./newsPage-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likes: 15},
                {id: 2, message: "It's my first post!", likes: 20}
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
        newsPage: {
            newsData: [
                {id: 1, newsContent: 'Yesterday...'},
                {id: 2, newsContent: 'Tomorrow...'},
            ],
            newsInputData: ''
        },

        NavBar: {
            friendsData: [
                {id: 1, avatar: avatar1},
                {id: 2, avatar: avatar2},
                {id: 3, avatar: avatar3}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
        this._state.newsPage = newsPageReducer(this._state.newsPage, action)

        this._callSubscriber(this._state)
    },
}
















export default store