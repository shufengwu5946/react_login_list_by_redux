import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { addTodo as add } from '../actions/index';
import { addButtonTxt } from '../i18n/message';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    width: 300,
    marginLeft: 12,
  },
  button: {
    margin: theme.spacing.unit,
    width: 100,
  },
});

class AddInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handlechange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    const { classes, addTodo, userId } = this.props;
    const { name } = this.state;
    return (
      <div className={classes.root}>
        <FormattedMessage
          defaultMessage="Add"
          id="addTodoLabel"
        >
          {
            txt => (
              <TextField
                id="standard-with-placeholder"
                label={`${txt} todo`}
                placeholder={`${txt} todo`}
                className={classes.todoText}
                margin="normal"
                onChange={e => this.handlechange(e)}
                value={name}
              />
            )
          }

        </FormattedMessage>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => addTodo(name, userId)}
        >
          {addButtonTxt}
        </Button>
      </div>

    );
  }
}

AddInput.propTypes = {
  classes: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({ userId: state.userId });

const mapDispatchToProps = dispatch => ({
  addTodo: (text, userId) => {
    if (!text) {
      alert('todo内容不能为空！');
      return;
    }
    dispatch(add(text, userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddInput));
