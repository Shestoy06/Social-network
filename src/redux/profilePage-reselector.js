import {createSelector} from "reselect";

export const getProfile = (state) => {
    return state.profilePage.profile
}

export const getProfileSuper = createSelector(getProfile, (users) => {
    return users.filter(data => true)
})
export const getStatus = (state) => {
    return state.profilePage.status
}
export const getUserAuthData = (state) => {
    return state.auth
}