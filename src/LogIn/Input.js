import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux'
import { setUserName, setPassword } from '../actions/index';
import { userNameLabel, passwordLabel } from "../i18n/message";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  }
});

class Input extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">

        <TextField
          id="standard-with-placeholder"
          label={userNameLabel}
          placeholder="User Name*"
          className={classes.textField}
          margin="normal"
          onChange={(e) => this.props.setUserName(e.target.value)} />
        <TextField
          id="standard-password-input"
          label={passwordLabel}
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          onChange={(e) => this.props.setPassword(e.target.value)}
        />
      </form>
    );
  }
}

Input.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    userName: state.userName,
    password: state.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserName: userName => {
      dispatch(setUserName(userName));
    },
    setPassword: password => {
      dispatch(setPassword(password));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Input));
