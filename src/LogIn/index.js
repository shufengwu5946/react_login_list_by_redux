import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Icon from './Icon';
import LoginInfo from './LoginInfo';
import Input from './Input';
import { login } from '../actions/index';

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

const Login = (props) => {
  const {
    classes, loginInfo, handleClick, loading,
  } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Icon />
        <LoginInfo loginInfo={loginInfo} />
        <Input />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleClick()}
          disabled={loading}
        >
          {loading ? 'Loggin in...' : 'Login'}
        </Button>
      </Paper>
    </div>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginInfo: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};


const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(login());
  },
});

// const LoginInput  = connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Login));
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
