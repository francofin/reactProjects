import React from 'react';
import './App.css';
import FrozenDept from './components/FrozenDept';
import MeatDept from './components/MeatDept';
import ProduceDept from './components/ProduceDept';
import NavBar from './components/NavBar';
import Main from './components/Main';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" component={NavBar} />
          <Route path="/main" component={Main} />
          <Route path="/frozen" component={FrozenDept} />
          <Route path="/meat" component={MeatDept} />
          <Route path="/produce" component={ProduceDept} />
      </header>
    </div>
    </Router>
    
  );
}

export default App;
