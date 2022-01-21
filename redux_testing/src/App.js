import React from 'react';
import './App.css';
import FrozenDept from './components/FrozenDept';
import MeatDept from './components/MeatDept';
import ProduceDept from './components/ProduceDept';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <FrozenDept />
          <MeatDept />
          <ProduceDept />
      </header>
    </div>
  );
}

export default App;
