import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TodoContext } from '../RootComponent';

const styles = theme => ({
  textField: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    width: '100%',
    boxSizing: 'border-box',
  },
});

function LoginInfo(props) {
  const ctx = useContext(TodoContext);
  const { classes } = props;
  return <div className={classes.textField} style={{ color: 'red' }}>{ctx.state.loginInfo}</div>;
}

LoginInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginInfo);
