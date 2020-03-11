import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import style from './log.css';
import { Link } from "react-router-dom";
import axios from "axios";
class login extends React.Component {
    state = {
        email: '',
        password: '',
      }
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
      submitFormAdd = e => {
        e.preventDefault()
    
        const userData = {
          email: this.state.email,
          password: this.state.password
        }
        axios.post('/main/login', userData)
        .then(response=>{
            if(response.data.status)
            {
                //we store emailid just to avoid the match in token error
                localStorage.setItem("usertoken",response.data.token)
                localStorage.setItem("email",response.data.emailid)
                localStorage.setItem("name",response.data.message)
              window.alert( "welcome"+" "+response.data.message +"  you are login successfully")
              window.location.href = "/"; 
              
            }
            if(response.data.status1)
            {
              window.alert("Email and password does not match")
              
            }
            if(response.data.status2)
            {
              window.alert("Email does not exits")
              
            }
        })
         .catch(err=>console.log(err));
    }
    render(){
    return(
        <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form onSubmit={this.submitFormAdd} >
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input  className="input" type="email" placeholder="Email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} />
                <input   className="input" type="password"  placeholder="Password" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password}  />
                <a href="forgetpassword">Forgot your password?</a><br></br>
               
                <button  type="submit" className="button">Sign in</button>
                <br></br>
                <a href="Fan">Creat an account?</a>
            </form>
        </div>
            </div>        
                   
    );
 }
}
export default login