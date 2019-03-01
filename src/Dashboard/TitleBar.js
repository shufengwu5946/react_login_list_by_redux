import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import { logOutSuccess as logOutSucc } from '../actions/index';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const TitleBar = (props) => {
  const {
    classes, logOutSuccess, loading, userName,
  } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {`Hello ${userName}`}
        </Typography>
        <Button color="inherit" onClick={() => logOutSuccess()} disabled={loading}>LogOut</Button>
      </Toolbar>
    </AppBar>
  );
};

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  logOutSuccess: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading,
  userName: state.userName,
});

const mapDispatchToProps = dispatch => ({
  logOutSuccess: () => {
    dispatch(logOutSucc());
    dispatch(replace('/'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TitleBar));
