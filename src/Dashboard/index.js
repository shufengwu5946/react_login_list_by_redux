import React from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TodoAddInput from "../containers/TodoAddInput";
import TodoTitleBar from "../containers/TodoTitleBar";
import TodoList from "../containers/TodoList";

const styles = {
    root: {
        width: '100%',
    },
    title: {
        marginLeft: 12,
        marginTop: 10
    }
};

class Dashboard extends React.Component {

    componentDidMount(){
        this.props.loadTodos();
    }

    render() {
        const { classes } = this.props;
        return (

            <div className={classes.root}>
                <TodoTitleBar />
                <Typography className={classes.title} variant="h4" gutterBottom>
                    Todo Form
                </Typography>
                <TodoAddInput />
                <Typography className={classes.title} variant="h4" gutterBottom>
                    Todo List
                </Typography>
                {this.props.todos &&
                    <TodoList />
                }
            </div>

        );
    }
}

// export default Dashboard;
Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
