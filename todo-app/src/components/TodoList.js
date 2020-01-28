import React from 'react'
import Todo from './components/Todo'


class TodoList extends Component {
	constructor(props) {
		super(props);
    }

    renderTodos = () => {
        return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} id={todo.id} 
            updateTodo={this.props.updateTodo} />)
      }

render(){
    return (
        <div className = "list">\
      {this.renderTodos()}
    
    </div>
    )
}
}
export default TodoList 