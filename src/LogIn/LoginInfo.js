import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  }
});

class LoginInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return <div className = {classes.textField} style = {{color:"red"}}>{this.props.loginInfo}</div>;
  }
}

LoginInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginInfo);
