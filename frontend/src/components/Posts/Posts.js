import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';  // to fetch the data from global redux store
import Post from './Post/Post';
import useStyles from "./styles"
const Posts = ({setCurrentId}) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts)
    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) =>(
                        <Grid key ={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} /> 
                            {/* Props drilling ..... sending the same props again and again */}
                        </Grid> 
                    ))
                }
            </Grid>
        )
    );
}
export default Posts;