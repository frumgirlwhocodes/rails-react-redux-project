
import { loadTodos, addTodo, toggleTodo, deleteTodos } from '../actions/actionCreators'
import axios from 'axios'


  export const getTodos = () => {
    return(dispatch) => {
    axios.get('http://localhost:3000/api/v1/todos')
    .then(response => {
    dispatch(loadTodos(response.data));
    })
    .catch(error => console.log(error))
  }
}

  
  export const createTodo =( title, date ) => {
    return(dispatch) => {
    if (!(title === '')) {
		axios.post('http://localhost:3000/api/v1/todos', {todo: {title: title, date:date}})
		.then(response => {
			dispatch(addTodo(response.data.id, response.data.title, response.data.date))
		})
		.catch(error => console.log(error))      
		}    
  }
  }

export const  updateTodo = (params) => { 
  return(dispatch) => {
    axios.put(`http://localhost:3000/api/v1/todos/${params.id}`, {todo: {done: params.checked}})
    .then(response => {
    dispatch(toggleTodo(params.id))
    })
    .catch(error => console.log(error))      
}
}

 export const deleteTodo = (id) => {
   return(dispatch) => {
    axios.delete(`http://localhost:3000/api/v1/todos/${id}`)
    .then(response => {
      dispatch(deleteTodos(id))
    })
    .catch(error => console.log(error))
  }
}
