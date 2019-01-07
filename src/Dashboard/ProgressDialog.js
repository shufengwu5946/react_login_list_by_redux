import React, { useContext } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from '@material-ui/core/DialogTitle';
import { TodoContext } from "../RootComponent";

const styles = {};

function ProgressDialog(props) {

  const ctx = useContext(TodoContext);

  return (
    <Dialog open={ctx.state.progress}>
      <DialogTitle >加载中...</DialogTitle>
    </Dialog>
  );

}

ProgressDialog.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(ProgressDialog);