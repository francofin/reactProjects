import React, {Component} from 'react';
import './Login.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import {regAction} from '../../actions';
import openModal from '../../actions/openModal';
import SignUp  from './SignUp';

class Login extends Component{

    constructor(){
        super();
        this.state = {
            password:"",
            email:""
        }
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
        
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
        
    }

    submitLogin = async (e) =>{
        e.preventDefault();
        console.log("Login Requested");

        const url = `${window.apiHost}/users/login`;
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        const resp = await axios.post(url,data);
        const token = resp.data.token;
        console.log(token)
        console.log(resp)

        if(resp.data.msg === "badPass"){
            swal({
                title: "Email Exists",
                text: "The email or password you provided is incorrect. Please try another.",
                icon: "error",
              })            
        }else if(resp.data.msg === "noEmail"){
            swal({
                title: "Invalid email",
                text: "Please provide a valid email",
                icon: "error",
              })
        }else if(resp.data.msg === "loggedIn"){
            swal({
                title: "Success!",
                icon: "success",
              });
            // we call our register action to update our auth reducer!!
            this.props.regAction(resp.data);
        }

        const url2 = `${window.apiHost}/users/token-check`;
        const resp2 = await axios.post(url2,token);
        console.log(resp2.data);
        
    }

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    <input type="text" className="browser-default" placeholder="Email address" onChange={this.changeEmail} value={this.state.email}/>
                    <input type="password" className="browser-default" placeholder="Password" onChange={this.changePassword} value={this.state.password}/>
                    <button className="sign-up-button">Login</button>
                    <div className="divider"></div>
                    <div>Don't have an account? <span className="pointer" onClick={()=>{this.props.openModal("open", <SignUp />)}}>Sign up</span></div>
                </form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal:openModal,
        regAction: regAction,
    },dispatcher)
}

export default connect(null, mapDispatchToProps)(Login);