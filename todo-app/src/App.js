import React, { Component } from 'react';
import './App.css';
import TodosContainer from "./containers/TodosContainer"
import CreateTodo from "./containers/CreateTodo"

class App extends Component {
  
  render() {
  return (
    <div className="todoHeader">
      <CreateTodo /> 
      <h1> What has to be done  </h1>
     
  < TodosContainer />

    </div>
  );
}
}

export default App;
