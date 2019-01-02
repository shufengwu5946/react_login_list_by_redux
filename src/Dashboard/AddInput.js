import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
    root: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    todoText: {
        width: 300,
        marginLeft: 12
    },
    button: {
        margin: theme.spacing.unit,
        width: 100
    }
});

class AddInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {name:""}
    }
    handleClick(){
        this.props.handleAdd(this.state.name);
    }

    handlechange(e){
        this.setState({name:e.target.value});
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <TextField
                    id="standard-with-placeholder"
                    label="Add todo"
                    placeholder="Add todo"
                    className={classes.todoText}
                    margin="normal" 
                    onChange = {(e)=>this.handlechange(e)}
                    value = {this.state.name}/>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={e => this.handleClick(e)}>
                    新增
                </Button>
            </div>

        )
    }
}

AddInput.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddInput);