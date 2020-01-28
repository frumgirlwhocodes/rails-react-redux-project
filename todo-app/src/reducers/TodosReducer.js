import { LOAD_TODOS, ADD_TODO, TOGGLE_TODO,  DELETE_TODO } from '../actions/actionTypes'
import cuid from 'cuid';
export const cuidFn = cuid;

function todosReducer(state = { todos:[] }, action) 
{
    switch(action.type) {
        case LOAD_TODOS:
            return action.todos;

        case ADD_TODO:
  const todo = { title: action.title, 
                date: action.date,
                id: cuidFn() }
      return {
                ...state, 
                todos: [ ...state.todos, todo]
                }
    
    
        case TOGGLE_TODO:
            return state.todos.map(todo => (todo.id === action.id) 
                  ? {...todo, done: !todo.done}
                  : todo
            );

        case DELETE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.id)}

        default:
            return state;    
    }
}

export default todosReducer