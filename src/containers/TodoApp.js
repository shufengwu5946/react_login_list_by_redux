import { connect } from 'react-redux'
import App from '../App';

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const TodoApp = connect(mapStateToProps)(App);
export default TodoApp;
