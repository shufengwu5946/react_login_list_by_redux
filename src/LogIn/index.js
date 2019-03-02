import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from './Icon';
import LoginInfo from './LoginInfo';
import Input from './Input';
import { logInStart, logInSuccess, logInFail } from '../actions/index';
import { TodoContext } from '../RootComponent';
import fetchLogin from '../utils';

const styles = theme => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'white',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: '50%',
  },
  paper: {
    paddingTop: 10,
    marginTop: '10%',
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function Login(props) {
  const ctx = useContext(TodoContext);
  const login = () => {
    if ((!ctx.state.userName) && ctx.state.userName.length <= 0) {
      alert('用户名不能为空');
      return;
    }
    if ((!ctx.state.password) && ctx.state.password.length <= 0) {
      alert('密码不能为空');
      return;
    }
    ctx.dispatch(logInStart());
    fetchLogin(ctx.state.userName, ctx.state.password).then(
      (value) => {
        ctx.dispatch(logInSuccess(ctx.state.userName, value.userId));
      },
      (error) => {
        ctx.dispatch(logInFail(error.error ? error.error : 'Uh oh,some error happened!'));
      },
    );
  };
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Icon />
        <LoginInfo />
        <Input />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => login()}
          disabled={ctx.state.loading}
        >
          {ctx.state.loading ? 'Loggin in...' : 'Login'}
        </Button>
      </Paper>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
