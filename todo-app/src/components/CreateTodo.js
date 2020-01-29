
import React, { Component } from 'react'

class CreateTodo extends Component {
constructor(props){
super(props);
this.state = {
  title: '',
  date: ''
} 
}
 handleSubmit = event => {}

render() {
return(

  <div className= "todoInput"> 
     <h1> Add a To DO </h1>
     <form onSubmit = {this.handleSubmit} >

       <input className= "titleInput"
              type= "text"
              placeholder =" Add a task"
              maxLength= "60">
       
       </input>



     </form>
  </div>
)
}




}



export default CreateTodo;









// * <input className="titleInput" type="text" 
//   placeholder="Add a task" maxLength="50"
// onChange={this.handleChange} />
