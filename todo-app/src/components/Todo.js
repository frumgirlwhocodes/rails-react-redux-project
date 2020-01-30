import React, {Component} from 'react';

class Todo extends Component { 

  updateTodo = (e, id) => {
        this.props.updateTodo({id: id, checked: e.target.checked})
    }
 
 deleteTodo= (id) => {
      this.props.deleteTodo(id)
  }    
render(){
 const todo= this.props.todo 
    return ( 
    <div>
    <ul>
      <li className = "todo" key ={todo.id}>
     <lable className = "todoTitle" >{todo.title} </lable> 
      <lable className= "todoDate">  {todo.date}</lable>   
      <input className="taskCheckbox" type="checkbox" 
                checked={todo.done} onChange={(e) => this.updateTodo(e, todo.id)} />  
      <button className = "deleteTask" onClick={() => this.deleteTodo(todo.id)}>Delete</button>
      </li> 
      </ul> 
    </div>
  )
    }

};


export default Todo;