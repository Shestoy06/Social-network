import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_USERS_LOADED = 'TOGGLE-USERS-LOADED'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS'


const initState = {
    usersData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoaded: false,
    followingInProgress: []
}

const usersPageReducer = (state = initState, action) => {
    switch (action.type) {

        case TOGGLE_USERS_LOADED:
            return {
                ...state,
                isLoaded: action.isLoaded
            }

        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.followingInProgress ?
                        [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }


        case SET_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersNumber
            }

        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                } )
            }

        case SET_USERS:
            return {
                ...state,
                usersData: [...action.users]
            }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPage = (pageNumber) => ({type: SET_PAGE, pageNumber})
export const setUsersNumber = (usersNumber) => ({type: SET_TOTAL_USERS_COUNT, usersNumber})
export const toggleIsLoaded = (isLoaded) => ({type: TOGGLE_USERS_LOADED, isLoaded})
export const toggleFollowingInProgress = (followingInProgress, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress, userId})

export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsLoaded(false))
        usersAPI.getUsers(pageSize, currentPage)
            .then((data) => {
                let data_locations = data.items.map(item => ({
                    ...item,
                    location: {city: 'Paris', country: 'France'}
                }))
                dispatch(setUsers(data_locations))
                dispatch(toggleIsLoaded(true))
                dispatch(setUsersNumber(50))
            })
    }
}

export const following = (followed, userId) => {

    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true, userId))

        if (followed === false) {
            usersAPI.follow(userId)
                .then(data => {
                    if (data.resultCode === 0) dispatch(follow(userId))
                    dispatch(toggleFollowingInProgress(false, userId))
                })
        } else {
            usersAPI.unfollow(userId)
                .then(data => {
                    if (data.resultCode === 0) dispatch(unfollow(userId))
                    dispatch(toggleFollowingInProgress(false, userId))
                })
        }
    }
}

export default usersPageReducer