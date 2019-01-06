import React from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AddInput from "./AddInput";
import TitleBar from "./TitleBar";
import TodoList from "./TodoList";
import { connect } from 'react-redux';
import { loadTodos} from '../actions/index';
import ProgressDialog from './ProgressDialog';

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
                <TitleBar />
                <Typography className={classes.title} variant="h4" gutterBottom>
                    Todo Form
                </Typography>
                <AddInput />
                <Typography className={classes.title} variant="h4" gutterBottom>
                    Todo List
                </Typography>
                {this.props.todos &&
                    <TodoList />
                }
                
                <ProgressDialog open = {this.props.progress}/>
            </div>

        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        todos:state.todos,
        progress:state.progress
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadTodos: () => {
            dispatch(loadTodos());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));
