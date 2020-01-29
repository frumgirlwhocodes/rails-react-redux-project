import React, { Component } from 'react';
import './App.css';
import TodosContainer from "./containers/TodosContainer"

class App extends Component {
  
  render() {
  return (
    <div className="todoHeader">
      <h1> List of Tasks </h1>
     
  <p>
     < TodosContainer />
</p>
    </div>
  );
}
}

export default App;
