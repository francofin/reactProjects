import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Home from './Home';
import Help from './Help';

const Host = ()=><h1>Become a host</h1>

const Login = ()=><h1>Login</h1>
const Signup = ()=><h1>Sign Up</h1>



function App() {
  return (
    <Router >
      <NavBar />
      <Route exact path='/' render={() =>{
        return <Home title="hello" />}}/>
      <Route exact path='/host' component={Host}/>
      <Route path='/help' component={Help}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/login' component={Login}/>
    </Router>
  );
}

export default App;
