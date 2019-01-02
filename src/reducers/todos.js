// import {} from '../actions/index';
import {
    getMaxId
} from '../other/other';

export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const s = [
                ...state,
                {
                    id: (getMaxId(state) + 1),
                    text: action.text,
                    completed: false
                }
            ];
            console.log(s);
            return s;
        case 'DELETE_TODO':
            return state.map(value =>
                (value.id === action.id) ? {...value, completed: true} : value
            )
        case 'LOAD_TODO':
            return [...action.todos];
        default:
            return state;
    }
}


