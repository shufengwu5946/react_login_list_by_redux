import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { deleteTodo } from '../actions/index';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  todoText: {
    width: 300,
    marginLeft: 12,
  },
  button: {
    margin: theme.spacing.unit,
    width: 100,
  },
});

const TodoList = (props) => {
  const { classes, todos } = props;
  return (
    <div className={classes.demo}>
      <List dense={false}>
        {
          todos.map(((value) => {
            if (!value.completed) {
              return (
                <ListItem key={value.id} data={value} />
              );
            }
            return null;
          }))
        }

      </List>
    </div>

  );
};

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
      },
    ).isRequired,
  ).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id) => {
    dispatch(deleteTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoList));
