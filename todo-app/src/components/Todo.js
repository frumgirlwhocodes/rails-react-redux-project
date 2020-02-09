import React, {Component} from 'react';


class Todo extends Component { 

  updateTodo = (e, id) => {
    console.log(id)
    console.log(e.target.checked)
  
        this.props.updateTodo( {id: id, checked: e.target.checked})
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
      <input className="taskCheckbox" type="checkbox" name="checkbox"
                checked={todo.done} onChange={(e) => this.updateTodo(e, todo.id)} />  
    <p className="title"> <label className = "todoTitle" >{todo.title} </label> </p>
  <p className= "forDate"> For:    <label className= "todoDate">  {todo.date}</label> </p>
  <span> <button className = "deleteTask" onClick={() => this.deleteTodo(todo.id)}>Delete</button></span>
      </li> 
      </ul> 
    </div>
  )
    }

};


export default Todo;