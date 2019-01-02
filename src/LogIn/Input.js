import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

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

  handleUserChange(e) {
    this.props.handleChange({ userName: e.target.value });
  }

  handlePassChange(e) {
    this.props.handleChange({ password: e.target.value });
  }

  render() {
    const { classes } = this.props;
    const { userName, password } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        
        <TextField
          id="standard-with-placeholder"
          label="User Name*"
          placeholder="User Name*"
          className={classes.textField}
          margin="normal"
          value={userName}
          onChange={(e) => this.handleUserChange(e)} />
        <TextField
          id="standard-password-input"
          label="Password*"
          className={classes.textField}
          type="password*"
          autoComplete="current-password"
          margin="normal"
          value={password}
          onChange={(e) => this.handlePassChange(e)}
        />
      </form>
    );
  }
}

Input.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Input);
