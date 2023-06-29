import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initState = {
    profile: null,
    postsData: [
        {id: 1, message: "Hi, how are you?", likes: 15},
        {id: 2, message: "It's my first post!", likes: 20}
    ],
    newPostText: "",
    status: ""
}

const profilePageReducer = (state = initState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostText, likes: 0,}
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_DATA: {
            return {
                ...state,
                newPostText: action.newPostValue
            }
        }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.userProfile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state

    }
}

export const addPost = () => ( {type: ADD_POST} )
export const updateNewPostData = (text) => ({type: UPDATE_NEW_POST_DATA, newPostValue: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, userProfile: profile })
export const getStatus = (status) => ({type: SET_STATUS, status})

export const getUserData = (userId) => {
    return (dispatch) => {
        profileAPI.profileData(userId)
            .then(data => dispatch(setUserProfile(data)))
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getStatus(status))
                }
            })
    }
}

export default profilePageReducer