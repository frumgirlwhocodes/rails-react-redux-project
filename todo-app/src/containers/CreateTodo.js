
import React, { Component } from 'react'
import { createTodo} from '../actions/todosActions'
import { connect } from 'react-redux'

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
   this.setState( { title: ' ', 
    date: ''})
   
 }

 handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
 });
}

render() {
return(

  <div className= "todoInput"> 
    
     <form onSubmit = {(event) => this.handleSubmit(event)} >
<div>
<label>Add todo</label><br></br>
       <input className= "titleInput"
              type= "text"
              name ="title"
              placeholder ="Add a task"
              maxLength= "60"
              value = {this.state.title}
            onChange= {this.handleChange}
              /> <br></br>
       </div>
       <input className= "dateInput"
              type= "text"
              name="date"
              placeholder ="date of task"
              value={this.state.date}
              onChange = {this.handleChange}
              /> 
              <br></br>

              <button type="submit" className="btn btn-default">Add</button>

     </form>
  </div>
)}
}

const mapDispatchToProps = dispatch => ({
  addTodo: (title, date)=> dispatch(createTodo(title, date))
})

export default connect(null, mapDispatchToProps)(CreateTodo);



