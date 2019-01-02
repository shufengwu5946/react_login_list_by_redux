import { connect } from 'react-redux'
import { setUserName, setPassword } from '../actions/index'
import Input from '../LogIn/Input';

const mapStateToProps = state => {
    return {
        userName: state.userName,
        password: state.password
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserName: userName => {
            dispatch(setUserName(userName));
        },
        setPassword: password => {
            dispatch(setPassword(password));
        }
    }
}

const LoginInput = connect(mapStateToProps, mapDispatchToProps)(Input);
export default LoginInput;
