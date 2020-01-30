import React, {Component}  from 'react'
import Todo from '../components/Todo'


class TodoList extends Component {

    renderTodos = () => {
      const todos= Array.from(this.props.todos)
        return todos.map( (todo) => <Todo delete={this.props.delete} key={todo.id} todo={todo} id={todo.id} 
            updateTodo={this.props.updateTodo} />)
      }

render(){
    return (
        <div className = "list">
          <ul className = "todoList">
      {this.renderTodos()}
    </ul> 
    </div>
    )
}
}
export default TodoList 