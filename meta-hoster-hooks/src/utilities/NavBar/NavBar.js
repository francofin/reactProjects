import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import logOutAction from '../../actions/logOutAction';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/Login/SignUp';
import "./navbar.css";


class NavBar extends Component{


    componentDidUpdate(oldProps){
        console.log(oldProps)
        if(oldProps.auth.token !== this.props.auth.email){
            this.props.openModal('close',"" );
        }
    }
    render(){
        console.log(window.location)
        let navBarClass;
        if (this.props.location.pathname==="/"){
            navBarClass = "transparent"
        } else{
            navBarClass = "black"
        }

        console.log(this.props.auth.email);
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
                                {this.props.auth.email
                                    ? <>
                                    <li><Link to="/account">Hello, {this.props.auth.email}</Link></li>
                                    <li onClick={()=>this.props.logOutAction()}>LogOut</li>
                                    </>
                                    : 
                                    <>
                                    <li className='login-signup' onClick={()=>{this.props.openModal('open', <SignUp />)}}>Sign Up</li>
                                    <li className='login-signup' onClick={()=>{this.props.openModal('open', <Login />)}}>Log In</li>
                                </>}
                            </ul>
                        </div>
                    </nav>                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth:state.auth,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
        logOutAction:logOutAction,
    },dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);