import { connect } from 'react-redux'
import AddInput from '../Dashboard/AddInput';
import {addTodo} from '../actions/index'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => {
            console.log(text);
            
            dispatch(addTodo(text));
        }
    }
}

const TodoAddInput = connect(mapStateToProps,mapDispatchToProps)(AddInput);
export default TodoAddInput;
