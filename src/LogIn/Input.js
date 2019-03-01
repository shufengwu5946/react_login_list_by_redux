import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { setUserName as setUser, setPassword as setPass } from '../actions/index';

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

const Input = (props) => {
  const { classes, setUserName, setPassword } = props;
  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="standard-with-placeholder"
        label="User Name*"
        placeholder="User Name*"
        className={classes.textField}
        margin="normal"
        onChange={e => setUserName(e.target.value)}
      />
      <TextField
        id="standard-password-input"
        label="Password*"
        className={classes.textField}
        type="password*"
        autoComplete="current-password"
        margin="normal"
        onChange={e => setPassword(e.target.value)}
      />
    </form>
  );
};

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  setUserName: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userName: state.userName,
  password: state.password,
});

const mapDispatchToProps = dispatch => ({
  setUserName: (userName) => {
    dispatch(setUser(userName));
  },
  setPassword: (password) => {
    dispatch(setPass(password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Input));
