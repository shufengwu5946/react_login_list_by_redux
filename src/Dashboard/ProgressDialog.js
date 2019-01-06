import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {};

class ProgressDialog extends React.Component {
  render() {
    const { classes , ...other} = this.props;

    return (
        <Dialog {...other}>
            <DialogTitle >加载中...</DialogTitle>
        </Dialog>
    );
  }
}

ProgressDialog.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(ProgressDialog);