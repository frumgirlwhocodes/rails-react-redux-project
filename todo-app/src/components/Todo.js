import React from 'react';

const Todo = props => { 

  updateTodo = (e, id) => {
        this.props.updateTodo({id: id, checked: e.target.checked})
    }
 
 deleteTodo= (id) => {
      this.props.deleteTodo(id)
  }    

 const todo= this.props.todo 
    return ( 
    <div>
    <ul>
      <li className = "todo" key ={props.todo.id}>
     <lable className = "todoTitle" >{props.todo.title} </lable> 
      <lable className= "todoDate">  {props.todo.date}</lable>   
      <input className="taskCheckbox" type="checkbox" 
                checked={todo.done} onChange={(e) => this.updateTodo(e, todo.id)} />  
      <button className = "deleteTask" onClick={() => this.delete(todo.id)}>Delete</button>
      </li> 
      </ul> 
    </div>
  )

};

export default Todo;