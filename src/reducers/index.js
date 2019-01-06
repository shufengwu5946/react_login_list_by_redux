import { handleActions} from 'redux-actions';
import {
  getMaxId,
  getCount
} from '../other/other';

const defaultState = {
  todos:[],
  loginInfo:'',
  login:false,
  userName:'',
  userId:0,
  password:'',
  loading:false,
  progress:false
};

const todoApp = handleActions({
  ADD_TODO:(state,action)=>({
    ...state,
    todos:[
      {
          id: (getMaxId(state.todos) + 1),
          title: action.title,
          completed: false,
          userId: action.userId
      }
    ]
  }),
  DELETE_TODO:(state,action)=>({
    ...state,
    todos:state.todos.map(value =>
      (value.id === action.id) ? { ...value,
          completed: true
      } : value
    )
  }),
  LOAD_TODO:(state,action)=>({
    ...state,
    todos:[...action.todos],
    progress:false
  }),
  LOG_OUT_SUCCESS:(state,action)=>({
    ...state,
    login:false,
    userName:'',
    password:'',
    loading:false
  }),
  LOG_IN_SUCCESS:(state,action)=>({
    ...state,
    loginInfo:'',
    login:true,
    userName:action.userName,
    userId:action.userId,
    loading:false,
    progress:true,
    todos:[]
  }),
  LOG_IN:(state,action)=>({
    ...state,
    loginInfo:'',
    loading:true
  }),
  LOG_IN_FAIL:(state,action)=>({
    ...state,
    loginInfo:action.loginInfo,
    login:false,
    loading:false,

  }),
  SET_USER_NAME:(state,action)=>({
    ...state,
    userName:action.userName
  }),
  SET_PASSWORD:(state,action)=>({
    ...state,
    password:action.password
  }),
  SET_LOGIN_LOADING:(state,action)=>({
    ...state
  })
},defaultState);

// const todoApp = combineReducers({
//   todos,
//   loginInfo,
//   login,
//   userName,
//   userId,
//   password,
//   loading,
//   progress
// })

export default todoApp