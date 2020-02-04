import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import Help from './components/Help';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);




ReactDOM.render(
    <Provider store ={store}>
<Router>
  <div>
    <NavBar/>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/about/" component={About} />
          <Route path= "/help/" component= {Help} />
        </Switch>
        </div>
      </Router>    
</Provider>
,document.getElementById('root'));


serviceWorker.unregister();

