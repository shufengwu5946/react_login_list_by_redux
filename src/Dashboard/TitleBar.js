import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { logOutSuccess as logOutSucc } from '../actions/index';
import { titleTxt, logOutTxt } from '../i18n/message';

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
    classes, userName, logOutSuccess, loading,
  } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {titleTxt}
          {` ${userName}`}
        </Typography>
        <Button color="inherit" onClick={() => logOutSuccess()} disabled={loading}>{logOutTxt}</Button>
      </Toolbar>
    </AppBar>
  );
};

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  logOutSuccess: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading,
  userName: state.userName,
});

const mapDispatchToProps = dispatch => ({
  logOutSuccess: () => {
    dispatch(logOutSucc());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TitleBar));
