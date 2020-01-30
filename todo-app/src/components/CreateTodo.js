
import React, { Component } from 'react'

class CreateTodo extends Component {
constructor(props){
super(props);
this.state = {
  title: '',
  date: ''
} 
};

handleSubmit = (event) => {
   event.preventDefault()
   this.props.addTodo({
   title: this.state.title, 
   date: this.state.date  })
   
 }

 handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
 });
}

render() {
return(

  <div className= "todoInput"> 
    
     <form onSubmit = {this.handleSubmit} >
<div>
       <input className= "titleInput"
              type= "text"
              placeholder ="Add a task"
              maxLength= "60"
              value = {this.state.title}
              onChange= {this.handleChange}
              /> <br></br>
       </div>
       <input className= "dateInput"
              type= "text"
              placeholder ="date of task"
              value = {this.state.date}
              onChange= {this.handleChange}
              /> 
              <br></br>

    <input type="submit" /> 

     </form>
  </div>
)}
}



export default CreateTodo;


