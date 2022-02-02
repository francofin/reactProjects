import React, {Component, lazy} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import {Nav, Modal} from "./utilities";
import {Home, PaymentSuccess, Account} from "./pages";
import './App.css';
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';
import CityVenues from './pages/CityVenues/CityVenues';

const Search = lazy(()=>{
  import('./utilities')
});

class App extends Component {
  
  
  render(){
    return (
      <Router>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/venue/:vid" component ={SingleFullVenue} />
        <Route exact path="/city/:cityName" component = {CityVenues} />
        <Route exact path="/payment-success/:stripeToken" component={PaymentSuccess} />
        <Route path="/account" component={Account} />
        <Route path="/search/:searchTerm" component={Search} />
        <Route path="/" component={Modal} />
      </Router>
    );
  } 
}

export default App;
