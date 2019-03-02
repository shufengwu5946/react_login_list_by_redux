import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from './ListItem';
import { TodoContext } from '../RootComponent';

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

function TodoList(props) {
  const ctx = useContext(TodoContext);

  const { classes } = props;
  return (
    <div className={classes.demo}>
      <List dense={false}>
        {
          ctx.state.todos.map(((value) => {
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
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoList);
