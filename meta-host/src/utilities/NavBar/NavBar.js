import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


class NavBar extends Component{
    render(){
        console.log(window.location)
        let navBarClass;
        if (this.props.location.pathname==="/"){
            navBarClass = "transparent"
        } else{
            navBarClass = "black"
        }
        return(
            <div className="container-fluid nav">
                <div className="row">
                    <nav className={`${navBarClass}`}>
                        <div className="nav-wrapper">
                            <Link to="/" className="left">Meta-Hosters</Link>
                            <ul id="nav-mobile" className='right'>
                                <li><Link to="/">English (US)</Link></li>
                                <li><Link to="/">$USD</Link></li>
                                <li><Link to="/">Become a Host</Link></li>
                                <li><Link to="/">Help</Link></li>
                                <li><Link to="/">Sign Up</Link></li>
                                <li><Link to="/">Log In</Link></li>
                            </ul>
                        </div>
                    </nav>                    
                </div>
            </div>
        )
    }
}

export default NavBar;