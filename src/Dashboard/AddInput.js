import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { addTodo } from '../actions/index'
import { TodoContext } from '../RootComponent';


const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    todoText: {
        width: 300,
        marginLeft: 12
    },
    button: {
        margin: theme.spacing.unit,
        width: 100
    }
});

function AddInput(props) {


    const [name, setName] = useState("");

    const ctx = useContext(TodoContext);


    const { classes} = props;
    return (
        <div className={classes.root}>
            <TextField
                id="standard-with-placeholder"
                label="Add todo"
                placeholder="Add todo"
                className={classes.todoText}
                margin="normal"
                onChange={(e) => setName(e.target.value)}
                value={name} />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                    if(!name){
                        alert("todo名称不能为空！");
                        return;
                    }
                    ctx.dispatch(addTodo(name, ctx.state.userId))
                    }}>
                新增
                </Button>
        </div>

    )
}

AddInput.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddInput);
