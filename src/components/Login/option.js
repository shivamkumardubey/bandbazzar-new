import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import style from './option.css';
import { Link } from "react-router-dom";
class option extends React.Component {
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
	    <a href="/Artistdashmain" class="button1">Sign Up</a>
	  </div>
	  <div class="grid-1-5">
	    
	    <h3><span class="uppercase">Crew Member</span></h3>
	    <p>10,000 monthly visits</p>
	    <ul>
	      <li>Limited Email Support</li>
	      <li>Unlimited Data Transfer</li>
	      <li>10GB Local Storage</li>
	    </ul>
	    <a href="/Banddashmain" class="button1">Sign Up</a>
	  </div>
	  <div class="grid-1-5">
	    
	    <h3><span class="uppercase">Band</span></h3>
	    <p>10,000 monthly visits</p>
	    <ul>
	      <li>Limited Email Support</li>
	      <li>Unlimited Data Transfer</li>
	      <li>10GB Local Storage</li>
	    </ul>
	    <a href=" /Crewdashmain" class="button1">Sign Up</a>
	  </div>
	  <div class="grid-1-5">
	    
	    <h3><span class="uppercase">Studio</span></h3>
	    <p>10,000 monthly visits</p>
	    <ul>
	      <li>Limited Email Support</li>
	      <li>Unlimited Data Transfer</li>
	      <li>10GB Local Storage</li>
	    </ul>
	    <a href="/Studiodashmain" class="button1">Sign Up</a>
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
export default option