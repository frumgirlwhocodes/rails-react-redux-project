import { LOAD_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actionTypes'

export function loadTodos(todos) {
    return { type: LOAD_TODOS, todos: todos }
  }
  
  export function addTodo(id, title, date ) {
    return { type: ADD_TODO, id: id, title: title, date: date}
  }
  
  export function toggleTodo(id) {
    return { type: TOGGLE_TODO, index: id }
  }


  
  export function deleteTodo(id) {
    return { type: DELETE_TODO, id: id  }
  }