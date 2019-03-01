// import {} from '../actions/index';
import {
  getMaxId,
} from '../other/other';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const sAdd = [
        ...state,
        {
          id: (getMaxId(state) + 1),
          title: action.title,
          completed: false,
          userId: action.userId,
        },
      ];
      return sAdd;
    }
    case 'DELETE_TODO': {
      const sDel = state.map(value => ((value.id === action.id) ? {
        ...value,
        completed: true,
      } : value));
      return sDel;
    }
    case 'LOAD_TODO':
      return [...action.todos];
    case 'LOG_IN_SUCCESS':
      return [];
    default:
      return state;
  }
};

export default todos;
