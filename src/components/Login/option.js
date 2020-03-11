import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import style from './option.css';
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
        <div>
      	<div class="container1 group">
	  <div class="grid-1-5">
	    
	    <h3><span class="uppercase">Artist</span></h3>
	    <p>10,000 monthly visits</p>
	    <ul>
	      <li>Limited Email Support</li>
	      <li>Unlimited Data Transfer</li>
	      <li>10GB Local Storage</li>
	    </ul>
	    <a href="" class="button1">Sign Up</a>
	  </div>
	  <div class="grid-1-5">
	    
	    <h3><span class="uppercase">Crew Member</span></h3>
	    <p>10,000 monthly visits</p>
	    <ul>
	      <li>Limited Email Support</li>
	      <li>Unlimited Data Transfer</li>
	      <li>10GB Local Storage</li>
	    </ul>
	    <a href="" class="button1">Sign Up</a>
	  </div>
	  <div class="grid-1-5">
	    
	    <h3><span class="uppercase">Band</span></h3>
	    <p>10,000 monthly visits</p>
	    <ul>
	      <li>Limited Email Support</li>
	      <li>Unlimited Data Transfer</li>
	      <li>10GB Local Storage</li>
	    </ul>
	    <a href="" class="button1">Sign Up</a>
	  </div>
	  <div class="grid-1-5">
	    
	    <h3><span class="uppercase">Studio</span></h3>
	    <p>10,000 monthly visits</p>
	    <ul>
	      <li>Limited Email Support</li>
	      <li>Unlimited Data Transfer</li>
	      <li>10GB Local Storage</li>
	    </ul>
	    <a href="" class="button1">Sign Up</a>
	  </div>
	  <div class="grid-1-5">
	    
	    <h3><span class="uppercase">Fan</span></h3>
	    <p>10,000 monthly visits</p>
	    <ul>
	      <li>Limited Email Support</li>
	      <li>Unlimited Data Transfer</li>
	      <li>10GB Local Storage</li>
	    </ul>
	    <a href="" class="button1">Sign Up</a>
	  </div>
	</div>
       </div> 
    );
 }
}
export default login