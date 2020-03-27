import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>New post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hello, World!' likeCount='5'/>
                <Post message='My first react project' likeCount='2 '/>
            </div>
        </div>
    );
}

export default MyPosts;
