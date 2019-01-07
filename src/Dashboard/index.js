import React, { useEffect, useContext } from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AddInput from "./AddInput";
import TitleBar from "./TitleBar";
import TodoList from "./TodoList";
import { loadTodo } from '../actions/index';
import ProgressDialog from './ProgressDialog';
import { TodoContext } from "../RootComponent";
import getList from "../other/get-list";

const styles = {
    root: {
        width: '100%',
    },
    title: {
        marginLeft: 12,
        marginTop: 10
    }
};

function Dashboard(props) {

    const ctx = useContext(TodoContext);
    const loadTodos = () => {
        getList(ctx.state.userId, (data) => {
            const todos = data;
            ctx.dispatch(loadTodo(todos));
        }, (error) => {
            console.log('error')
        });
    }

    useEffect(
        () => {
            loadTodos();
        },[ctx.state.userId]
    );
    const { classes } = props;

    return (
        <div className={classes.root}>
            <TitleBar />
            <Typography className={classes.title} variant="h4" gutterBottom>
                Todo Form
                </Typography>
            <AddInput />
            <Typography className={classes.title} variant="h4" gutterBottom>
                Todo List
                </Typography>
            {ctx.state.todos &&
                <TodoList />
            }

            <ProgressDialog />
        </div>
    );

}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
