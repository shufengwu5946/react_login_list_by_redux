import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    width: '100%',
    boxSizing: 'border-box',
  },
});

const LoginInfo = (props) => {
  const { classes, loginInfo } = props;
  return <div className={classes.textField} style={{ color: 'red' }}>{loginInfo}</div>;
};

LoginInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  loginInfo: PropTypes.string.isRequired,
};

export default withStyles(styles)(LoginInfo);
