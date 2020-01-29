import React, { Component } from 'react'
import update from 'immutability-helper'
import CreateTodo from "./components/CreateTodo"
import { getTodos, createTodo, updateTodo, deleteTodo} from './actions/todosActions'
import {connect} from 'react-redux'
 import TodoList from "./components/TodoList"



class TodosContainer extends Componenet {

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
      update: () => dispatch(updateTodo())
    
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)