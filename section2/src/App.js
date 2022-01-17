import logo from './logo.svg';
import './App.css';
import StateInAction from './StateInAction';
import SimpleEvents from './SimpleEvents';
import EventAndState from './EventAndState'
import CardSet from './CardSet';
import data from './cards';

console.log(data);


// console.log(cardsData)

function App() {
  
  return (
    <div className="App">
      <header className="container">
          <CardSet cards={data}/>
        <div>
          <StateInAction name="Francois"/>
        </div>
        <div>
        <SimpleEvents />
        </div>
        <div>
        <EventAndState />
        </div>
      </header>
    </div>
  );
}

export default App;
