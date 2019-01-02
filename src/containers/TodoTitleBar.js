import { connect } from 'react-redux'
import { logOutSuccess } from '../actions/index'
import TitleBar from '../Dashboard/TitleBar';

const mapStateToProps = state => {
    return {
        loading: state.loading,
        userName:state.userName,
        userId:state.userId,
        login:state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOutSuccess: () => {
            dispatch(logOutSuccess());
        }
    }
}

const TodoTitleBar = connect(mapStateToProps, mapDispatchToProps)(TitleBar);
export default TodoTitleBar;
