import { ListItem, Checkbox, FormGroup, FormControlLabel, Typography, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { useDispatch } from "react-redux";
import React from "react";
import { TOGGLE_COMPLETED, DELETE_TODO, TOGGLE_IMPORTANT } from "../redux/actions";

export default function TodoItem({ id, title, completed, important }) {
    const dispatch = useDispatch();

    function toggleCheckbox(e) {
        // Todo - need to dispatch an action that toggles a checkbox
        dispatch({
            type: TOGGLE_COMPLETED,
            payload: {
                id
            }
        })
    }

    function toggleImportant(e) {
        // need to dispatch an action that toggles important star
        dispatch({
            type: TOGGLE_IMPORTANT,
            payload: {
                id
            }
        })
    }

    function handleDeleteClick(e) {
        //Dispatch an action that deletes a checkbox
        dispatch({
            type: DELETE_TODO,
            payload: {
                id
            }
           })
    }

    return (
        <ListItem dense >
            <FormGroup>
                <FormControlLabel
                control={
                    <Checkbox
                    checked={completed}
                    onChange={toggleCheckbox}
                    name={title}
                    color="primary"
                    />
                }
                label={
                    <Typography style={{
                        textDecoration: completed && "line-through"
                    }}>
                        {title}
                    </Typography>
                }
                >

                </FormControlLabel>
            </FormGroup>
            <ListItemSecondaryAction>
                <IconButton onClick={toggleImportant} edge="end">
                    {important ? <StarIcon /> : <StarOutlineIcon />}
                </IconButton>
                <IconButton onClick={handleDeleteClick} edge="end">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}