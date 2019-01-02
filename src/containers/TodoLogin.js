import { connect } from 'react-redux'
import { login } from '../actions/index'
import LogIn from '../LogIn/index';

const mapStateToProps = state => {
    return {
        loginInfo:state.loginInfo,
        loading:state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => {
            dispatch(login());
        }
    }
}

const LoginInput  = connect(mapStateToProps,mapDispatchToProps)(LogIn);
export default LoginInput;
