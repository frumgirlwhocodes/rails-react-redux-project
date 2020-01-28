
import { loadTodos, addTodo, toggleTodo, deleteTodo } from '../actions/actionCreators'
import axios from 'axios'


  export const getTodos = () => {
    axios.get('/api/v1/todos')
    .then(response => {
    this.props.dispatch(loadTodos(response.data));
    })
    .catch(error => console.log(error))
  }

  


  export const createTodo= ( title, date ) => {
    if (!(title === '')) {
		axios.post('/api/v1/todos', {todo: {title: title, date:date}})
		.then(response => {
			this.props.dispatch(addTodo(response.data.id, response.data.title, response.data.date))
		})
		.catch(error => console.log(error))      
		}    
  }

export const  updateTodo = (params) => {
    axios.put(`/api/v1/todos/${params.id}`, {todo: {done: params.checked}})
    .then(response => {
    this.props.dispatch(toggleTodo(params.id))
    })
    .catch(error => console.log(error))      
}

 export const deleteTodo = (id) => {
    axios.delete(`/api/v1/todos/${id}`)
    .then(response => {
      this.props.dispatch(deleteTodo(id))
    })
    .catch(error => console.log(error))
  }
