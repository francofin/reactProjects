import React, {useState, useEffect} from 'react';
import './Login.css';
import { useDispatch} from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import {regAction} from '../../actions';
import openModal from '../../actions/openModal';
import SignUp  from './SignUp';

function Login(props) {

    const dispatch = useDispatch()

    const [password, changePassword] = useState("")
    const [email, changeEmail] = useState("")


    const submitLogin = async (e) =>{
        e.preventDefault();
        console.log("Login Requested");

        const url = `${window.apiHost}/users/login`;
        const data = {
            email: email,
            password: password
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
            dispatch(regAction(resp.data));
        }

        const url2 = `${window.apiHost}/users/token-check`;
        const resp2 = await axios.post(url2,token);
        console.log(resp2.data);
        
    }

        return(
            <div className="login-form">
                <form onSubmit={submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    <input type="text" className="browser-default" placeholder="Email address" onChange={(e) => {changeEmail(e.target.value)}} value={email}/>
                    <input type="password" className="browser-default" placeholder="Password" onChange={(e) => {changePassword(e.target.value)}} value={password}/>
                    <button className="sign-up-button">Login</button>
                    <div className="divider"></div>
                    <div>Don't have an account? <span className="pointer" onClick={()=>dispatch(openModal("open", <SignUp />))}>Sign up</span></div>
                </form>
            </div>
        )
    }



export default Login;