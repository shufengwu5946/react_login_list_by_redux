import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux'
import { logOutSuccess } from '../actions/index'

const styles = theme => ({
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

class TitleBar extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {`Hello ${this.props.userName}`}
                    </Typography>
                    <Button color="inherit" onClick={() => this.props.logOutSuccess()} disabled={this.props.loading}>LogOut</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

TitleBar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        loading: state.loading,
        userName:state.userName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOutSuccess: () => {
            dispatch(logOutSuccess());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TitleBar));
