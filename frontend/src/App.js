import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import memories from "./images/memories.jpg"
import Posts from './components/Posts/Posts'
import Form from './components/Forms/Form'
import useStyles from "./styles"

 const App = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">
                        MEMORIES
                    </Typography>
                    <img className={classes.image} src={memories} alt="memories" height="180" />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={5}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
        </Container>
    )
}
export default App;