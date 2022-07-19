import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Box, IconButton, Typography, Paper, Container } from '@material-ui/core';
import React from 'react';
import TodoAdder from './components/todo-adder';
import TodosContainer from "./components/todos-container";

const useStyles = makeStyles((theme) => ({
    root: {},
    appContainer: {
        paddingLeft: 100,
        paddingRight: 100,
        marginTop: 100
    },
    wrapper: {
        textAlign: "center",
        width: 100,

    }
}));

export default function ImranTodos() {
    const classes = useStyles();
    return <Box className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit">
                    <img 
                    alt="Imran TODO logo"
                    style={{
                        width: "50px"
                    }} src="logo.png" />
                </IconButton>
                <Typography variant="h5">
                    To-Do App
                </Typography>
            </Toolbar>
        </AppBar>

        <Container className={classes.appContainer}>
            <Paper className={classes.wrapper} elevation={0}>
                    <TodoAdder />
                    <TodosContainer />
            </Paper>
        </Container>
    </Box>;
}