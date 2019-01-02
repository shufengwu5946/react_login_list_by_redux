import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import TodoListItem from './ListItem';

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

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(id){
        
        this.props.handleDelete(id);
    }

    render() {
        const { classes, list } = this.props;
        return (
            <div className={classes.demo}>
                <List dense={false}>
                    {
                        list.map((value => {
                            if (!value.completed) {
                                return (
                                    <TodoListItem key = {value.id} data = {value} handleDelete = {this.handleDelete}/>
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

export default withStyles(styles)(TodoList);