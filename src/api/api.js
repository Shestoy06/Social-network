import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})


export const usersAPI = {
    getUsers (pageSize, currentPage) {
        return (
            instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
        )
    },
    follow(id) {
        return (
            instance.post(`follow/${id}`).then(response => response.data)
        )
    },
    unfollow(id) {
        return (
            instance.delete(`follow/${id}`).then(response => response.data)
        )
    },
}

export const profileAPI = {
    profileData(userId) {
        return (
            instance.get('profile/' + userId ).then(response => response.data)
        )
    },
    getStatus(userId) {
        return (
            instance.get('profile/status/' + userId ).then(response => response.data)
        )
    },
    updateStatus(status) {
        return (
            instance.put('profile/status/', {status}).then(response => response)
        )
    }
}

export const authAPI = {
    auth() {
        return (
            instance.get(`auth/me`).then(response => {
                return response.data
            })
        )
    },
    login(email, password) {
        return (
            instance.post('auth/login', {email, password}).then(response => response)
        )
    },
    logout() {
        return (
            instance.delete('auth/login').then(response => response)
        )
    }
}
