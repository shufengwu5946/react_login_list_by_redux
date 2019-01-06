import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from './ListItem';
import { connect } from 'react-redux'
import { deleteTodo} from '../actions/index'

const styles = theme => ({
    root: {
        flexGrow: 1,
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

class TodoList extends React.Component {

    render() {
        const { classes} = this.props;
        return (
            <div className={classes.demo}>
                <List dense={false}>
                    {
                        this.props.todos.map((value => {
                            if (!value.completed) {
                                return (
                                    <ListItem key = {value.id} data = {value}/>
                                )
                            }else{
                                return null;
                            }

                        }))
                    }

                </List>
            </div>

        )
    }
}

TodoList.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        todos:state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: id => {
            dispatch(deleteTodo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoList));
