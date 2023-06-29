import React from "react";
import {addPost, updateNewPostData} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostData,
    addPost,
})(MyPosts)

export default MyPostsContainer