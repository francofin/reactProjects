import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import {Nav, Modal} from "./utilities";
import {Home} from "./pages";
import './App.css';
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';

class App extends Component {
  
  
  render(){
    return (
      <Router>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/venue/:vid" component ={SingleFullVenue} />
        <Route path="/" component={Modal} />
      </Router>
    );
  } 
}

export default App;
