import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>New post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;
