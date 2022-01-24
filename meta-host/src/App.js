import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import {Nav} from "./utilities";
import {Home} from "./pages";
import './App.css';

class App extends Component {
  
  
  render(){
    return (
      <Router>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
      </Router>
    );
  } 
}

export default App;
