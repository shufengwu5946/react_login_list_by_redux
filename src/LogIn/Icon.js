import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { loginIconTxt } from '../i18n/message';

const styles = () => ({
  root: {
    width: '100%',
  },
  avatar: {
    paddingTop: '10',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 50,
    height: 50,
  },
  name: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
});

const Icon = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <FolderIcon />
      </Avatar>
      <Typography className={classes.name} variant="h5" gutterBottom>
        {loginIconTxt}
      </Typography>
    </div>
  );
};

Icon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Icon);
