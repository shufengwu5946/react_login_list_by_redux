import { connect } from 'react-redux'
import AddInput from '../Dashboard/AddInput';
import {addTodo} from '../actions/index'

const mapStateToProps = state => {
    return {userId:state.userId}
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text,userId) => {
            console.log(text);
            
            dispatch(addTodo(text,userId));
        }
    }
}

const TodoAddInput = connect(mapStateToProps,mapDispatchToProps)(AddInput);
export default TodoAddInput;
