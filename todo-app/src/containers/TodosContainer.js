import React, { Component } from 'react'
import { getTodos} from '../actions/todosActions'
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
            <h1> What has to be done  </h1>
              <TodoList todos ={this.props.todos} delete={this.props.delete} update = {this.props.update}/>
              </div> 
        )}
} 

const mapStateToProps = (state) => {
    return {
      todos: state.todos
 
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      getTodos: () => dispatch(getTodos()),
      delete: id => dispatch(deleteTodo(id)), 
      update: (params) => {

        console.log(params)
        
         dispatch(updateTodo(params))}
    
    
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)