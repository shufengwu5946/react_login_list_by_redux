import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TodoContext } from '../RootComponent';

const styles = {};

function ProgressDialog() {
  const ctx = useContext(TodoContext);

  return (
    <Dialog open={ctx.state.progress}>
      <DialogTitle>加载中...</DialogTitle>
    </Dialog>
  );
}

export default withStyles(styles)(ProgressDialog);
