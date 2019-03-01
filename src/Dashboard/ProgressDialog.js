import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { loadingTxt } from '../i18n/message';

const styles = {};

const ProgressDialog = (props) => {
  const { classes, ...other } = props;

  return (
    <Dialog {...other}>
      <DialogTitle>{loadingTxt}</DialogTitle>
    </Dialog>
  );
};

ProgressDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProgressDialog);
