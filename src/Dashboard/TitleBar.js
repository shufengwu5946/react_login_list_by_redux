import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { LoginContext } from '../login-context';

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

    // handleLoginChange(){
    //     this.props.handleLoginChange({login:false});
    // }

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <LoginContext.Consumer>
                    {
                        ({userName,handleLoginChange})=>(
                            <Toolbar>
                                <Typography variant="h6" color="inherit" className={classes.grow}>
                                    {`Hello ${userName}`}
                                    </Typography>
                                <Button color="inherit" onClick = {()=>{handleLoginChange({login:false})}} disabled = {this.props.loading}>LogOut</Button>
                            </Toolbar>
                        )
                    }
                </LoginContext.Consumer>
                
            </AppBar>
        )
    }
}

TitleBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TitleBar);