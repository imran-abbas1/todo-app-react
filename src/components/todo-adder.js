import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Button } from '@material-ui/core';
import { ADD_TODO } from "../redux/actions";

export default function TodoAdder() {
    const [title, setTitle] = useState(null);
    const titleFieldRef = useRef(null);
    const dispatch = useDispatch();

    function handleTextChange(e) {
        setTitle(e.target.value);
    }

    function addTodoItem(params) {
        if (title) {
            //dispatch ADD_TODO action here 
            dispatch({
                type: ADD_TODO,
                payload: {
                    title,
                }
            });
            setTitle(null);
            titleFieldRef.current.value = "";
        }
        
    }


    return (
        <Box style={{
            width: 400,
        }}>
            <TextField label="Add new todo"
            inputRef={titleFieldRef}
            variant="filled"
            onChange={handleTextChange}
            >
            </TextField>
            
            <Button style={{
                height: 55,
                marginLeft: 10
            }} variant="contained" color="primary" onClick={addTodoItem}>Add</Button>
        </Box>
    )
}