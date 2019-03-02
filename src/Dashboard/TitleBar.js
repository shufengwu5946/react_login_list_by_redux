import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { logOutSuccess } from '../actions/index';
import { TodoContext } from '../RootComponent';

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

function TitleBar(props) {
  const ctx = useContext(TodoContext);
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {`Hello ${ctx.state.userName}`}
        </Typography>
        <Button color="inherit" onClick={() => ctx.dispatch(logOutSuccess())} disabled={ctx.state.loading}>LogOut</Button>
      </Toolbar>
    </AppBar>
  );
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleBar);
