import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import {Login,SignUp} from "../../pages";
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
                                <li onClick={()=>{this.props.openModal('open', <SignUp />)}}>Sign Up</li>
                                <li onClick={()=>{this.props.openModal('open', <Login />)}}>Log In</li>
                            </ul>
                        </div>
                    </nav>                    
                </div>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return{
//         siteModal = state.siteModal
//     }
// }

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal
    },dispatcher)
}

export default connect(null, mapDispatchToProps)(NavBar);