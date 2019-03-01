import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { deleteTodo as deleTodo } from '../actions/index';

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


const TListItem = (props) => {
  const { classes, data, deleteTodo } = props;
  return (
    <div className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={data.title}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={() => deleteTodo(data.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <hr />
    </div>

  );
};

TListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  data: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    },
  ).isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id) => {
    dispatch(deleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TListItem));
