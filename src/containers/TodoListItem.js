import { connect } from 'react-redux'
import { deleteTodo} from '../actions/index'
import TListItem from '../Dashboard/ListItem'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: id => {
            dispatch(deleteTodo(id));
        }
    }
}

const TodoListItem = connect(mapStateToProps, mapDispatchToProps)(TListItem);
export default TodoListItem;
