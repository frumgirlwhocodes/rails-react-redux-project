import React, { Component } from 'react'
import CreateTodo from "../components/CreateTodo"
import { getTodos} from '../actions/todosActions'
import { createTodo} from '../actions/todosActions'
import {deleteTodo} from '../actions/todosActions'
import {updateTodo} from '../actions/todosActions'
import {connect} from 'react-redux'
 import TodoList from "../components/TodoList"



class TodosContainer extends Component {

componentDidMount() {
    this.props.getTodos()
    }



    render() {
        return (
          <div className= "container">
              <CreateTodo  addTodo ={ this.props.placeTodo }/>
              <TodoList todos ={this.props.todos} delete={this.props.delete} update = {this.props.update}/>
              </div> 
        )}
} 

const mapStateToProps = (state) => {
    return {
      todos: state.todos
 
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getTodos: () => dispatch(getTodos()),
      placeTodo: (todo) => dispatch(createTodo(todo.title, todo.date)),
      delete: id => dispatch(deleteTodo(id)), 
      update: id => dispatch(updateTodo(id))
    
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)