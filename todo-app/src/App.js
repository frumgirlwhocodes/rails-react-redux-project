import React, { Component } from 'react';
import './App.css';
import TodosContainer from "./containers/TodosContainer"
import CreateTodo from "./containers/CreateTodo"

class App extends Component {
  
  render() {
  return (
    
    <div className="todoHeader">
      <CreateTodo />
     
  < TodosContainer />

    </div>
  );
}
}

export default App;
