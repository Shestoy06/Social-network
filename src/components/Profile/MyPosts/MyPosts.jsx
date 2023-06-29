import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import Button from "../../../UI/Button/Button";
import Preloader from "../../../UI/Preloader/Preloader";


function MyPosts(props) {

    if (!props.profile) return null

    let posts = props.postsData
        .map( post => <Post message={post.message} key={post.likes} likes={post.likes} profileImage={props.profile.photos.small}/>)

    let addPost = () => {
        props.addPost()
    }

    let updateNewPostData = (e) => {
        let text = e.target.value
        props.updateNewPostData(text)
    }


    return (
        <div className={s.posts}>
            <div className={s.posts__title}>My posts:</div>
            <div className={s.posts__new}>
                <input onChange={ updateNewPostData }
                       value={props.newPostText}
                       placeholder="What's new?"
                />
                <Button onClickFunction={ addPost } text='Send'/>
            </div>
            <div className={s.posts__items}>
                {posts.reverse()}
            </div>
        </div>

    )
}

export default MyPosts