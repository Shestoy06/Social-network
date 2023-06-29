import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'SET-USER-DATA'
const IS_LOADED = 'IS_LOADED'

let initState = {
    userId: null,
    login: null,
    email: null,
    password: null,
    isAuth: false,
    isLoaded: false,
}

const authReducer = (state = initState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }

        case IS_LOADED:
            return {
                ...state,
                isLoaded: action.isLoaded
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId, login, email, isAuth = true) => ( {type: SET_USER_DATA, data: {userId, login, email, isAuth}} )
export const setLoaded = (isLoaded) => ({type: IS_LOADED, isLoaded})

export const auth = () => {
    return (dispatch) => {
        dispatch(setLoaded(false))
        authAPI.auth()
            .then((data) => {
                dispatch(setLoaded(true))
                let {id, login, email} = data.data
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}

export const login = (email, pass) => {
    return (dispatch) => {
        authAPI.login(email, pass)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.data.userId, login, email))
                } else {
                    let errorMessage = response.data.messages.length ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {email: errorMessage}))
                }
            }
        )
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserData(null, null, null, false))
                    }
                }
            )
    }
}


export default authReducer