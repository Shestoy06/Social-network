import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import newsPageReducer from "./newsPage-reducer";
import navbarReducer from "./navbar-reducer";
import usersPageReducer from "./usersPage-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    newsPage: newsPageReducer,
    usersPage: usersPageReducer,
    navBar: navbarReducer,
    auth: authReducer,
    form: formReducer
})

let store = configureStore({
        reducer: reducers,
        middleware: [thunkMiddleware]
    }
)

window.store = store

export default store