<input className="taskInput" type="text" 
  placeholder="Add a task" maxLength="50"
onChange={this.handleChange} />
    
this.state = {
    todos: [],
    inputValue: ''
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value});
  }