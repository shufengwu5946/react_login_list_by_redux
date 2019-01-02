import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    root: {
        flexGrow: 1,
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



class TListItem extends React.Component {

    // click(){
        
        
    //     this.props.handleDelete(this.props.data.id);
    // }

    render() {
        const { classes, data } = this.props;
        return (
            <div className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={data.title}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick = {()=>this.props.deleteTodo(this.props.data.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <hr />
            </div>

        )
    }
}

TListItem.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TListItem);