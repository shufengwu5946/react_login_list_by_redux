import { connect } from 'react-redux'
import { deleteTodo} from '../actions/index'
import TL from '../Dashboard/TodoList'

const mapStateToProps = state => {
    return {
        todos:state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: id => {
            dispatch(deleteTodo(id));
        }
    }
}

const TodoList = connect(mapStateToProps, mapDispatchToProps)(TL);
export default TodoList;
