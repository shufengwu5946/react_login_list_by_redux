import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {};

const ProgressDialog = (props) => {
  const { classes, ...other } = props;
  return (
    <Dialog {...other}>
      <DialogTitle>加载中...</DialogTitle>
    </Dialog>
  );
};

ProgressDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProgressDialog);
