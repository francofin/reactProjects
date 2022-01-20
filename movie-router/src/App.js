import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';


const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing';
const similarMovies = 'https://api.themoviedb.org/3/movie/{movie_id}/similar';
const imageUrl = 'https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US';


function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path='/' component={Home}/>
          <Route exact path="/movie/:movieId" component ={Movie} />
      </div>
    </Router>
    
  );
}

export default App;
