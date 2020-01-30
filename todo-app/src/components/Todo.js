import React, {Component} from 'react';

class Todo extends Component { 

  updateTodo = (e, id) => {
        this.props.updateTodo({id: id, checked: e.target.checked})
    }
 
 deleteTodo= (id) => {
      this.props.delete(id)
  }    
render(){
 const todo= this.props.todo 
    return ( 
    <div>
    <ul>
      <li className = "todo" key ={todo.id}>
      <input className="taskCheckbox" type="checkbox" 
                checked={todo.done} onChange={(e) => this.updateTodo(e, todo.id)} />  
    <p> <lable className = "todoTitle" >{todo.title} </lable> </p>
  <p> For:    <lable className= "todoDate">  {todo.date}</lable> </p>
  <span> <button className = "deleteTask" onClick={() => this.deleteTodo(todo.id)}>Delete</button></span>
      </li> 
      </ul> 
    </div>
  )
    }

};


export default Todo;