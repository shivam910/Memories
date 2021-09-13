import React from 'react'
import Post from './Post/Post';
import useStyles from "./styles"

const Posts = () => {
    const classes = useStyles();
    return (
        <div>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </div>
    )
}
export default Posts;