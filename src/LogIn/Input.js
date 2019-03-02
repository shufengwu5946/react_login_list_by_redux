import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { setUserName, setPassword } from '../actions/index';
import { TodoContext } from '../RootComponent';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
});

function Input(props) {
  const ctx = useContext(TodoContext);
  const { classes } = props;
  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="standard-with-placeholder"
        label="User Name*"
        placeholder="User Name*"
        className={classes.textField}
        margin="normal"
        onChange={e => ctx.dispatch(setUserName(e.target.value))}
      />
      <TextField
        id="standard-password-input"
        label="Password*"
        className={classes.textField}
        type="password*"
        autoComplete="current-password"
        margin="normal"
        onChange={e => ctx.dispatch(setPassword(e.target.value))}
      />
    </form>
  );
}

Input.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Input);
