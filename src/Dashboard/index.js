import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AddInput from './AddInput';
import TitleBar from './TitleBar';
import TodoList from './TodoList';
import { loadTodos as lTodos } from '../actions/index';
import ProgressDialog from './ProgressDialog';
import { todoFormLabel, todoListLabel } from '../i18n/message';

const styles = {
  root: {
    width: '100%',
  },
  title: {
    marginLeft: 12,
    marginTop: 10,
  },
};

class Dashboard extends React.Component {
  componentDidMount() {
    const { loadTodos } = this.props;
    loadTodos();
  }

  render() {
    const { classes, progress, todos } = this.props;
    return (

      <div className={classes.root}>
        <TitleBar />
        <Typography className={classes.title} variant="h4" gutterBottom>
          {'Todo '}
          {todoFormLabel}
        </Typography>
        <AddInput />
        <Typography className={classes.title} variant="h4" gutterBottom>
          {'Todo '}
          {todoListLabel}
        </Typography>
        {todos
          && <TodoList />
        }
        <ProgressDialog open={progress} />
      </div>

    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
      },
    ).isRequired,
  ).isRequired,
  loadTodos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
  progress: state.progress,
});

const mapDispatchToProps = dispatch => ({
  loadTodos: () => {
    dispatch(lTodos());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));
