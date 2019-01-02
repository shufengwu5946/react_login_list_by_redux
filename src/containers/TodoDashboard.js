import { connect } from 'react-redux'
import { loadTodos} from '../actions/index'
import Dashboard from '../Dashboard/index'

const mapStateToProps = state => {
    return {
        todos:state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadTodos: () => {
            dispatch(loadTodos());
        }
    }
}

const TodoDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default TodoDashboard;
